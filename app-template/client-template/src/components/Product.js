import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/manageProducts.module.css";

function Product({ product, deleteProduct }) {
  const formatDate = (date) => {
    let dateObj = new Date(date);

    return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  };

  const handleDeleteProduct = () => {
    deleteProduct(product["_id"]);
  };

  return (
    <>
      <tr className={style.table_row}>
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>
          {product.description.length > 150
            ? `${product.description.slice(0, 150)} .......`
            : product.description}
        </td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{formatDate(product.date)}</td>
        <td>
          <Link to={`/update-item/${product["_id"]}`}>
            <button className="btn update_btn">Update</button>
          </Link>
          <button className="del_btn btn" onClick={handleDeleteProduct}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Product;
