import { useContext } from 'react';
import DataContext from '../context/dataContext';

export default function Block1() {
  const { color, status, description } = useContext(DataContext);

  return (
    <div className="app-block app-block-1" style={{ backgroundColor: color }}>
      <h2>{status ? status : 'Загрузка...'}</h2>
      <p>{description ? description : 'Загрузка...'}</p>
    </div>
  );
}
