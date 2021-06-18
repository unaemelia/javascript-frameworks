import React from 'react'
import Product from './Product';

function ProductList({ products }) {

    return (
        <div>
            {
                products.map((product) => (
                    <Product key={product['_id']} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList
