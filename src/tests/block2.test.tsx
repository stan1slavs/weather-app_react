import { render, screen } from '@testing-library/react';
import Block2 from '../components/block2';
import DataContext from '../context/dataContext';

const mockContextValue = {
  temp: '25.6',
  co2: '470',
  status: 'Душнила доволен вами',
  description: 'Все показатели в норме',
  color: '#86ff86',
  gradient: 'linear-gradient(334deg, #7cf59e, #fff)',
};

describe('Block2', () => {
  it('should display temperature and CO2 correctly', () => {
    render(
      <DataContext.Provider value={mockContextValue}>
        <Block2 />
      </DataContext.Provider>,
    );

    expect(screen.getByText(/25.6 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/470 ppm/i)).toBeInTheDocument();
  });

  it('should display "Загрузка..." when there is no data', () => {
    const loadingContextValue = {
      temp: '',
      co2: '',
      status: '',
      description: '',
      color: '#fff',
      gradient: 'linear-gradient(334deg, #fff, #fff)',
    };

    render(
      <DataContext.Provider value={loadingContextValue}>
        <Block2 />
      </DataContext.Provider>,
    );

    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument();
  });
});
