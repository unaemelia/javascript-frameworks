import React from 'react'

function Product({ product, deleteProduct }) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    const handleDeleteProduct = () => {
        deleteProduct(product['_id']);
    }


    return (
        <tbody>
            <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>{formatDate(product.date)}</td>
                <td>
                    <button>Update</button>
                    <button onClick={handleDeleteProduct}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Product
