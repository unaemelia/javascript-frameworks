import React from 'react'
import Product from './Product';

function ProductList({ products, deleteProduct }) {

    return (
        <table>
            < thead >
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead >
            {
                products.map((product) => (
                    <Product key={product['_id']} product={product} deleteProduct={deleteProduct} />
                ))
            }
        </table>
    )
}

export default ProductList
