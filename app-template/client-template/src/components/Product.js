import React from 'react'
import { Link } from 'react-router-dom';

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
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{formatDate(product.date)}</td>
                <td>
                    {/* A button cannot be inside of a link, this page hase a solution: */}
                    {/* https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button#answer-49439893 */}
                    <Link to={`/update-item/${product['_id']}`}><button>Update</button></Link>
                    <button onClick={handleDeleteProduct}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Product
