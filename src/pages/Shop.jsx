import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import useCoffeeProducts from '../hooks/useCoffeeProducts';

function Shop() {
    const [products, setProducts] = useCoffeeProducts();

    // Fetch the coffee data from the local json server when the component first mounts
    useEffect(() => {
        fetch('http://localhost:3001/coffee')
        .then((response) => response.json())
        .then(setProducts); // Save the fetched products into a state
    }, []); // empty dependency array to start with

    // this event handler is called when a product is updated (i.e., when price is edited)
    function handleUpdate(updatedProduct) {
        const updatedList = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedList);
    }
    // this event handler is called when deleting a product card from the shop page/route
    function handleDelete(idToDelete) {
        const updatedList = products.filter(p => p.id !== idToDelete);
        setProducts(updatedList);
    }
    
    return (
        <div className="shop-container">
            <div className="shop-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))}
            </div>
        </div>
    );

}

export default Shop;