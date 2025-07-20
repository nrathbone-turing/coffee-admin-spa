import { useState } from 'react';

function ProductForm() {
  // Initialize a controlled form state where each input is tied to formData
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: '',
  });

  // this event handler updates the appropriate field in formData based on which field contains data when submitted
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // this event handler is responsible for form submission and sending data to the backend db.json file
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default page reload behavior!

    // Convert price to a number (float data type) before sending
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price) || 0,
    };

    fetch('http://localhost:3001/coffee', {
      method: 'POST', // Create a new product in the SHop
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Product added!');
        // Reset form after submit
        setFormData({
          name: '',
          description: '',
          origin: '',
          price: '',
        });
      });
  }

  // Event form with the input fields shown in the mock design document for AdminPortal
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <label>
        Coffee Name
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Description
        <input name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Origin
        <input name="origin" value={formData.origin} onChange={handleChange} />
      </label>

      <label>
        Price
        <input name="price" type="number" value={formData.price} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;