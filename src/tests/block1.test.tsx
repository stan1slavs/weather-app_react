import { render, screen } from '@testing-library/react';
import Block1 from '../components/block1';
import DataContext from '../context/dataContext';

const mockContextValue = {
  temp: '25.6',
  co2: '470',
  status: 'Душнила доволен вами',
  description: 'Все показатели в норме',
  color: '#86ff86',
  gradient: 'linear-gradient(334deg, #7cf59e, #fff)',
};

describe('Block1', () => {
  it('should display correct values from context', () => {
    render(
      <DataContext.Provider value={mockContextValue}>
        <Block1 />
      </DataContext.Provider>,
    );

    expect(screen.getByText('Душнила доволен вами')).toBeInTheDocument();
    expect(screen.getByText('Все показатели в норме')).toBeInTheDocument();
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
        <Block1 />
      </DataContext.Provider>,
    );

    const tempElement = screen.getByText('Загрузка...', { selector: 'h2' });
    expect(tempElement).toBeInTheDocument();

    const co2Element = screen.getByText('Загрузка...', { selector: 'p' });
    expect(co2Element).toBeInTheDocument();
  });
});
