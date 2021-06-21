import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function UpdateItem({ match }) {
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/products/" + match.params.id
            );

            if (!response.ok) {
                throw new Error("Server Error: " + response.status);
            }
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        const object = {
            title: product.title,
            price: product.price,
            description: product.description,
            stock: product.stock,
            category: product.category,
        };

        try {
            const response = fetch(
                "http://localhost:5000/products/" + match.params.id,
                {
                    method: "PATCH", // *GET, POST, PATCH, DELETE, etc. 
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded', 
                    },
                    body: JSON.stringify(object), // body data type must match "Content-Type" header 
                }
            );
            console.log(response);

            history.push("/manage-items");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label>Title</label>
                <input
                    value={product.title}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            title: e.target.value,
                        })
                    }
                />
                <br />
                <label>Price</label>
                <input
                    value={product.price}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            price: e.target.value,
                        })
                    }
                />
                <br />
                <label>Stock</label>
                <input
                    value={product.stock}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            stock: e.target.value,
                        })
                    }
                />
                <br />
                <label>Description</label>
                <textarea
                    value={product.description}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            description: e.target.value,
                        })
                    }
                />
                <br />
                <select>
                    value={product.category}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            category: e.target.value,
                        })
                    }

                    <option value="">Category</option>
                    <option>Coffee</option>
                    <option>Tea</option>
                    <option>Chocolate</option>
                </select>
                <br />
                <button>Update</button>
                <br />
                <Link to="/manage-items">Back</Link>
            </form>
        </div >
    );
}



export default UpdateItem;
