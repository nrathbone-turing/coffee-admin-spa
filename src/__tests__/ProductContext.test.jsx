import { render, screen } from '@testing-library/react';
import { ProductProvider, useProductContext } from '../context/ProductContext';

const mockData = [
  {
    id: 1,
    name: 'Vanilla bean',
    description: 'Medium Roast, nutty flavor',
    origin: 'Columbia',
    price: 10.0,
  },
  {
    id: 2,
    name: 'House Blend',
    description: 'Dark Roast, Rich flavor',
    origin: 'Vietnam',
    price: 12.0,
  },
];

function TestComponent() {
  const { products } = useProductContext();
  return <div data-testid="product-count">{products.length} products loaded</div>;
}

describe('ProductContext', () => {
  beforeEach(() => {
    localStorage.setItem('products', JSON.stringify(mockData));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('provides coffee data from localStorage', () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    const countEl = screen.getByTestId('product-count');
    expect(countEl).toHaveTextContent('2 products loaded');
  });
});