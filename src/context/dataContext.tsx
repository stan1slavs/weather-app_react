import { createContext, useState, useEffect, useCallback } from 'react';
import { DataType, DataProviderProps } from '../interfaces/dataWeather';

const DataContext = createContext<DataType>({
  temp: '',
  co2: '',
  status: '',
  description: '',
  color: '#fff',
  gradient: 'linear-gradient(334deg, #fff, #fff)',
});

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<DataType>({
    temp: '',
    co2: '',
    status: '',
    description: '',
    color: '#fff',
    gradient: 'linear-gradient(334deg, #fff, #fff)',
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://dushnila.gooddelo.com/data');
      const result: DataType = await response.json();

      const updatedData = transformData(result.temp, result.co2);
      setData(updatedData);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }, []);

  const transformData = (temp: string, co2: string): DataType => {
    const tempLevel = parseFloat(temp);
    const co2Level = parseFloat(co2);

    let status = '';
    let description = '';
    let color = '';
    let gradient = '';

    if (co2Level > 800 && tempLevel > 27) {
      status = 'Душнила недоволен вами';
      description = 'Показатели превышены';
      color = '#f06767';
      gradient = 'linear-gradient(334deg, #f57c7c, #fff)';
    } else if (co2Level > 800) {
      status = 'Душнила недоволен вами';
      description = 'CO2 превышает норму';
      color = '#f06767';
      gradient = 'linear-gradient(334deg, #f57c7c, #fff)';
    } else if (tempLevel > 27) {
      status = 'Душнила недоволен вами';
      description = 'Температура превышена';
      color = '#f06767';
      gradient = 'linear-gradient(334deg, #f57c7c, #fff)';
    } else {
      status = 'Душнила доволен вами';
      description = 'Все показатели в норме';
      color = '#86ff86';
      gradient = 'linear-gradient(334deg, #7cf59e, #fff)';
    }

    return { temp, co2, status, description, color, gradient };
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataContext;
