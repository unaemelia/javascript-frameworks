import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Needs fix: Error: Server error 404
// Displays NaN instead of the product
// Use get method?

function Item({ match }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {


        try {
            const response = await fetch('http://localhost:5000/products' + match.params.id);
            if (!response.ok) {
                throw new Error('Server error ' + response.status);
            }
            const data = await response.json();
            console.log(data);

            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <div>
            <h2>Product</h2>
            {
                <article>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.stock}</p>
                    <p>{product.category}</p>
                    <i>{formatDate(product.date)}</i>
                </article>
            }

            <Link to="/">Back</Link>
        </div>
    )
}

export default Item
