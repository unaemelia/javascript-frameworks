import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import style from "../styles/manageProducts.module.css";
=======
>>>>>>> d3031a1b7a9ca7865d785c2942024a38eed5f062

function Product({ product, deleteProduct }) {
  const formatDate = (date) => {
    let dateObj = new Date(date);

    return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  };

  const handleDeleteProduct = () => {
    deleteProduct(product["_id"]);
  };
<<<<<<< HEAD

  return (
    <>
      <tr className={style.table_row}>
=======
  //testing for git

  return (
    <tbody>
      <tr>
>>>>>>> d3031a1b7a9ca7865d785c2942024a38eed5f062
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{formatDate(product.date)}</td>
        <td>
          <Link to={`/update-item/${product["_id"]}`}>
<<<<<<< HEAD
            <button className="btn update_btn">Update</button>
          </Link>
          <button className="del_btn btn" onClick={handleDeleteProduct}>
            Delete
          </button>
        </td>
      </tr>
    </>
=======
            <button>Update</button>
          </Link>
          <button onClick={handleDeleteProduct}>Delete</button>
        </td>
      </tr>
    </tbody>
>>>>>>> d3031a1b7a9ca7865d785c2942024a38eed5f062
  );
}

export default Product;
