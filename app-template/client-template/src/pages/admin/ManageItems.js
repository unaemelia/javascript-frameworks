import React, { useState, useEffect } from 'react'

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

    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <div>
            <h2>Manage Products</h2>
            {/* A button/Link */}
            <button>Create Items</button>

            <div id="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="displayProducts">
                        {
                            products.map((product) => (
                                <tr key={product['_id']} >
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.stock}</td>
                                    <td>{formatDate(product.date)}</td>
                                    <td>
                                        <button>Update</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ManageItems