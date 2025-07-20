import { render, screen } from '@testing-library/react';
import Shop from '../pages/Shop';
import { vi } from 'vitest';

// Mock data
const mockProducts = [
  { id: 1, name: 'Vanilla bean', description: '', origin: '', price: 10 },
  { id: 2, name: 'House Blend', description: '', origin: '', price: 12 },
];

describe('Shop', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      })
    );
  });

  afterEach(() => vi.restoreAllMocks());

  it('fetches and displays products', async () => {
    render(<Shop />);
    expect(await screen.findByText(/Vanilla bean/i)).toBeInTheDocument();
    expect(screen.getByText(/House Blend/i)).toBeInTheDocument();
  });
});