import { useState } from 'react';

function ProductCard({ product, onUpdate, onDelete }) {
  // Initialize a local state to control the editable price input
  const [price, setPrice] = useState(product.price);
  // Initialize a Local state to toggle between edit and view mode in the Shop
  const [editing, setEditing] = useState(false);

  // Define a controlled input for a price change event handler (so that the value is tied to the state)
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  // event handler function to allow admin users to delete products from the card
  function handleDelete() {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${product.name}"?`);
    if (!confirmDelete) return;

    fetch(`http://localhost:3001/coffee/${product.id}`, {
      method: "DELETE",
    })
      .then(() => onDelete(id));
  }
  // using the product's unique ID, save the newly added price by sending a PATCH request to the backend db.json file
  function handleSave() {
    fetch(`http://localhost:3001/coffee/${product.id}`, {
      method: 'PATCH', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: parseFloat(price) }), // Only updating the price here making sure it's a float data type
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        onUpdate(updatedProduct); // Notify parent to update the product list with new information
        setEditing(false); // Once complete, then exit edit mode
      });
  }

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      {/* Toggle option to go between editing and viewing the price */}
      {editing ? (
        <>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => setEditing(true)}>Edit Price</button>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </>
      )}
    </div>
  );
}

export default ProductCard;