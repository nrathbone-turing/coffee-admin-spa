import ProductForm from '../components/ProductForm';

function AdminPortal() {
  return (
    <div className="admin-form-container">
      <h2>Add New Coffee Product</h2>
      <ProductForm />
    </div>
  );
}

export default AdminPortal;