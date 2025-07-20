import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders navigation links', () => {
    render(<App />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Admin Portal/i)).toBeInTheDocument();
  });
});