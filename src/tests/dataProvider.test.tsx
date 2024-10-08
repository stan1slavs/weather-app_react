import '@testing-library/jest-dom';
// import { render, screen, waitFor } from '@testing-library/react';
// import DataContext, { DataProvider, fetchData } from '../context/dataContext';
// import { ReactNode } from 'react';

// // Мок fetchData
// jest.mock('../context/dataContext', () => ({
//   ...jest.requireActual('../context/dataContext'),
//   fetchData: jest.fn(() =>
//     Promise.resolve({
//       temp: '25.6',
//       co2: '470',
//       status: 'Душнила доволен вами',
//       description: 'Все показатели в норме',
//       color: '#86ff86',
//       gradient: 'linear-gradient(334deg, #7cf59e, #fff)',
//     })
//   ),
// }));

// const customRender = (ui: ReactNode) => {
//   render(<DataProvider>{ui}</DataProvider>);
// };

// describe('DataProvider', () => {
//   it('should provide correct context values', async () => {
//     customRender(
//       <DataContext.Consumer>
//         {(data) => (
//           <div>
//             <span data-testid="temp">{data.temp}</span>
//             <span data-testid="co2">{data.co2}</span>
//             <span data-testid="status">{data.status}</span>
//             <span data-testid="description">{data.description}</span>
//             <span data-testid="color">{data.color}</span>
//           </div>
//         )}
//       </DataContext.Consumer>
//     );

//     await waitFor(() => {
//       expect(screen.getByTestId('temp')).toHaveTextContent('25.6');
//       expect(screen.getByTestId('co2')).toHaveTextContent('470');
//       expect(screen.getByTestId('status')).toHaveTextContent('Душнила доволен вами');
//       expect(screen.getByTestId('description')).toHaveTextContent('Все показатели в норме');
//       expect(screen.getByTestId('color')).toHaveTextContent('#86ff86');
//     });
//   });
// });
