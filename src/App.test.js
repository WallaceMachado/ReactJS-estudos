import { render, screen } from '@testing-library/react';
import App from './App';
// componente para realizar testes
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
