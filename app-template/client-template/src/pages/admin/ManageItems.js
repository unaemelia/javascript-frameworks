import React, { useState, useEffect } from 'react'
import ProductList from '../../components/ProductList';
import { Link } from 'react-router-dom';
import { Title, PageWrapper, Button } from '../../styles/Styling';

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
            <Title>Manage Products</Title>
            <Link to="/create-item"><Button>Create Items</Button></Link>

            <section id="displayProducts">
                <ProductList products={products} deleteProduct={deleteProduct} />
            </section>
        </div>
    )
}

export default ManageItems