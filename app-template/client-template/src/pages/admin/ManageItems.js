import React, { useState, useEffect } from 'react'
import ProductList from '../../components/ProductList';
import { Link } from 'react-router-dom';

function ManageItems() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    // get all products
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            if (!response.ok) {
                throw new Error('Server error ' + response.status);
            }
            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    //delete product
    const deleteProduct = async (productId) => {
        try {
            await fetch(`http://localhost:5000/products/${productId}`, {
                method: 'DELETE',
            });

            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Manage Products</h2>
            {/* A button cannot be inside of a link, this page hase a solution: */}
            {/* https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button#answer-49439893 */}
            <Link to="/create-item"><button>Create Items</button></Link>

            <section id="displayProducts">
                <ProductList products={products} deleteProduct={deleteProduct} />
            </section>
        </div >
    )
}

export default ManageItems