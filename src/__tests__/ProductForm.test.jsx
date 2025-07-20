import { render, screen } from '@testing-library/react';
import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  it('renders form inputs for coffee info', () => {
    render(<ProductForm />);

    expect(screen.getByLabelText(/Coffee Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Origin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
  });
});