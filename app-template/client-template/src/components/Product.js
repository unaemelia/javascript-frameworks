import React from 'react'

function Product({ product }) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }


    return (
        <div>
            <tr>
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
        </div>
    )
}

export default Product
