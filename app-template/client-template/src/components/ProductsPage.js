import React from "react";
import proimage from "../images/pro-image.jpg";
import { Link } from "react-router-dom";
import { Button } from ".././styles/Styling";

const ProductsPage = ({ product }) => {
  return (
    <div className="product-item" key={product["_id"]}>
      <h2>{product.title}</h2>
      <img
        className="img-thumbnail"
        src={product.img ? product.img : proimage}
        alt={product.title}
      />
      <p>
        Price: <span className="price_label"> {product.price} SEK</span>
      </p>
      <p className="category_label">{product.category}</p>
      <p className="out_of_stock">{product.stock < 1 ? "Out of Stock" : ""}</p>
      <Link to={`/item/${product["_id"]}`}>
        <Button>View Product</Button>
      </Link>
    </div>
  );
};

export default ProductsPage;
