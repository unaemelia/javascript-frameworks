import React, { useState, useEffect } from 'react'
import ProductList from '../../components/ProductList';

function ManageItems() {
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

    // Needs a fix: issues with the productId
    const deleteProduct = async (productId) => {
        try {
            await fetch('http://localhost:5000/products/' + productId, {
                method: 'DELETE',
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Manage Products</h2>
            {/* A button/Link */}
            <button>Create Items</button>

            <div id="tableContainer">
                <table id="displayProducts">
                    <ProductList products={products} deleteProduct={deleteProduct} />
                </table>
            </div>
        </div >
    )
}

export default ManageItems