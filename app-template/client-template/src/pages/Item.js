import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import proimage from "../images/pro-image.jpg";


function Item({ match }) {
    const [product, setProduct] = useState({});
    const [productQuantity, setProductQuantity] = useState(1);
    const productId = match.params.productId;
    // console.log(match.params);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        const productData = await response.json();
        console.log(productData);
        setProduct(productData);
    };

    return (
        <div className="product-box">
            <div className="img-box">
                <img
                    className="product-img"
                    src={product.img ? product.img : proimage}
                    alt={product.title}
                />
            </div>
            <div className="product-details">
                <h1>{product.title}</h1>
                <p>Price: {product.price} Kr</p>
                <input
                    className="quantity-box"
                    type="number"
                    value={productQuantity}
                    onChange={(e) => {
                        setProductQuantity(e.target.value);
                    }}
                />
                <button className="cart-btn">Add to Cart</button>
                <p>Avaliable Stock: {product.stock}</p>

                <p>Product detail: {product.description}</p>
                <Link to="/">Back</Link>
            </div>
        </div>

    )
}

export default Item
