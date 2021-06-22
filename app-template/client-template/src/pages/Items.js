import React, { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { Title } from '../styles/Styling';

function Items() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');

            if (!response.ok) {
                throw new Error('Server error ' + response.status);
            }
            const data = await response.json();
            console.log(data);

            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Title>Products</Title>
            <div className="product-list">
                {
                    products.map((product) => (
                        <ProductsPage key={product['_id']} product={product} />
                    ))
                }
            </div>
        </div>

    )
}

export default Items
