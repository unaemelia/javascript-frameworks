import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductForm = ({
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    category,
    setCategory,
    img,
    setImg,
    handleSubmit,
    formId,
}) => {
    const formDataHandler = (e) => {
        e.preventDefault();
        const formData = {
            title: title,
            description: description,
            price: price,
            stock: stock,
            category: category,
            img: img,
        };
        handleSubmit(formData);
    };
    //////////Fetch Categories///////
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await fetch("http://localhost:5000/categories");
        const cat = await res.json();
        setCategories(cat);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            <form onSubmit={formDataHandler}>
                <div className="form-row">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <div className="form-row">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="img">Image URL</label>
                    <input
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option
                                key={category._id}
                                value={category.title}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">
                    {formId === "create-item" ? "Create" : "Update"}
                </button>
                <Link to="/manage-items">
                    <button>Back</button>
                </Link>
            </form>
        </div>
    );
};

export default ProductForm;