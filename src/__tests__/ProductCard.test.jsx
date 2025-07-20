import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const product = {
  id: 1,
  name: 'Vanilla bean',
  description: 'Medium Roast, nutty flavor',
  origin: 'Columbia',
  price: 10.0,
};

describe('ProductCard', () => {
  it('displays coffee info', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(/Vanilla bean/i)).toBeInTheDocument();
    expect(screen.getByText(/Medium Roast, nutty flavor/i)).toBeInTheDocument();
    expect(screen.getByText(/Columbia/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10.00/)).toBeInTheDocument();
  });

  it('allows price editing (if editable)', () => {
    render(<ProductCard product={product} />);

    const priceInput = screen.getByDisplayValue('10');
    fireEvent.change(priceInput, { target: { value: '12' } });
    expect(priceInput.value).toBe('12');
  });
});