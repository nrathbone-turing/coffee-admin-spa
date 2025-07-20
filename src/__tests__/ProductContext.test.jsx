import { render, screen } from '@testing-library/react';
import { ProductProvider, useProductContext } from '../context/ProductContext';
import { vi } from 'vitest';

// global mock coffee product data for testing
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

// keeping the test component to access the context in the first place
function TestComponent() {
  const { products } = useProductContext();
  return <div data-testid="product-count">{products.length} products loaded</div>;
}

describe('ProductContext', () => {

  beforeEach(() => {
    // mock the fetch to return mockData when ProductProvider runs
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  });

  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks(); // Clean up mocks after each test
  });

  it('provides coffee data from fetch', async () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    const countEl = await screen.findByTestId('product-count');
    expect(countEl).toHaveTextContent('2 products loaded');
  });
});