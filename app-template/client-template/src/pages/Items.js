import React, { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';

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
            <h1>Products</h1>
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

// <article key={product['_id']}>
                        //     <h3>{product.title}</h3>
                        //     <p>{product.description}</p>
                        //     <p>{product.stock}</p>
                        //     <p>{product.category}</p>
                        //     <i>{formatDate(product.date)}</i>
                        //     <Link to={`/item/${product['_id']}`}> Read More</Link>
                        // </article>