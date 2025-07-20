import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);

  // Fetch the coffee data from the local json server when the component first mounts
  useEffect(() => {
    fetch('http://localhost:3001/coffee')
      .then((response) => response.json())
      .then(setProducts); // Save the fetched products into a state
  }, []); // empty dependency array to start with

  // This event handler is called when a product is updated (i.e., when price is edited)
  function handleUpdate(updatedProduct) {
    const updatedList = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedList);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1rem'
      }}>
        {/* Render each product in the grid */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;