import React from "react";
import proimage from "../images/pro-image.jpg";
import { Link } from "react-router-dom";

const ProductsPage = ({ product }) => {
    return (
        <div className="product-item" key={product['_id']}>
            <h2>{product.title}</h2>
            <img
                className="img-thumbnail"
                src={product.img ? product.img : proimage}
                alt={product.title}
            />
            <p>Price: {product.price} SEK</p>
            <Link to={`/item/${product['_id']}`}>View Product</Link>
        </div>
    );
};

export default ProductsPage;