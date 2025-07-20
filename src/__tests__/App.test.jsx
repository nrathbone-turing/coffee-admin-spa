import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders navigation links', () => {
    render(<App />);

    const links = screen.getAllByRole('link');

    expect(links.some(link => link.textContent === 'Home')).toBe(true);
    expect(links.some(link => link.textContent === 'Shop')).toBe(true);
    expect(links.some(link => link.textContent === 'Admin Portal')).toBe(true);
  });
});