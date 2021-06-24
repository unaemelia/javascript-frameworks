import React from "react";
import Product from "./Product";
import style from "../styles/manageProducts.module.css";

function ProductList({ products, deleteProduct }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th className={style.product_description}>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product
            key={product["_id"]}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
