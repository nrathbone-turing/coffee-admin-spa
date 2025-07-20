import { useEffect, useState } from 'react';

// custom hook that encapsulates the fetch logic and manages state internally,
// then returns both the product list and the setter (so you can update/delete)
function useCoffeeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/coffee')
      .then((response) => response.json())
      .then(setProducts)
      .catch((error) => {
        console.error("Error fetching coffee products:", error);
      });
  }, []);

  return [products, setProducts];
}

export default useCoffeeProducts;