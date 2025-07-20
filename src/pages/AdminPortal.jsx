import ProductForm from '../components/ProductForm';

function AdminPortal() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add New Coffee Product</h2>
      <ProductForm />
    </div>
  );
}

export default AdminPortal;