import { useContext } from 'react';
import DataContext from '../context/dataContext';

export default function Block2() {
  const { temp, co2, gradient } = useContext(DataContext);

  return (
    <div
      className="app-block app-block-2"
      style={{ backgroundImage: gradient }}
    >
      <h1>
        {temp ? `${temp} °C` : 'Загрузка...'}
        <span id="first-span">Температура</span>
        {co2 ? `${co2} ppm` : 'Загрузка...'}
        <span>CO2</span>
      </h1>
    </div>
  );
}
