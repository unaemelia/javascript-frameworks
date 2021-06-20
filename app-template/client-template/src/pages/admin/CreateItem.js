import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CreateItem() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");

    const history = useHistory();

    // const handleChange = (e) => {
    //   // Needs a fix: ...product, "content" -> here is title, price, stock, etc
    //   setProduct({
    //     object: e.target.value,
    //   });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const object = {
            title: title,
            price: price,
            description: description,
            stock: stock,
            category: category,
        };

        try {
            await fetch("http://localhost:5000/products/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(object),
            });

            history.push("manage-items");
        } catch (error) {
            console.log(error);
        }
    };
    // git testing
    return (
        <div>
            <h1>Create Product</h1>
            {/* styling next week - take out <br /> */}
            {/* a lot of repetition - need to fix */}
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label>Stock</label>
                <input value={stock} onChange={(e) => setStock(e.target.value)} />
                <br />
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {/* option: "category" should not be able to be chosen  */}
                    <option value="">Category</option>
                    <option>Coffee</option>
                    <option>Tea</option>
                    <option>Chocolate</option>
                </select>
                <br />
                <button>Create</button>
                <br />
                <Link to="/manage-items">Back</Link>
            </form>
        </div>
    );
}

export default CreateItem;

// import React, { useState } from 'react'
// import { Link, useHistory } from 'react-router-dom';

// function CreateItem() {
//     const [product, setProduct] = useState({});
//     const history = useHistory();

//     const handleChange = (e) => {
//         // Needs a fix: ...product, "content" -> here is title, price, stock, etc
//         setProduct({
//             ...product,
//             object: e.target.value
//         });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const object = {
//             title: product.title.value,
//             price: product.price.value,
//             description: product.description.value,
//             stock: product.stock.value,
//             category: product.category.value
//         }

//         try {
//             await fetch('http://localhost:5000/products/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(object)
//             });

//             history.push('manage-items');
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div>
//             <h1>Create Product</h1>
//             {/* styling next week - take out <br /> */}
//             {/* a lot of repetition - need to fix */}
//             <form onSubmit={handleSubmit}>
//                 <label>Title</label>
//                 <input
//                     value={product.title}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <label>Price</label>
//                 <input
//                     value={product.price}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <label>Stock</label>
//                 <input
//                     value={product.stock}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <label>Description</label>
//                 <textarea
//                     value={product.description}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <select
//                     value={product.category}
//                     onChange={handleChange}
//                 >
//                     {/* option: "category" should not be able to be chosen  */}
//                     <option value="">Category</option>
//                     <option>Coffee</option>
//                     <option>Tea</option>
//                     <option>Chocolate</option>
//                 </select>
//                 <br />
//                 <button>Create</button>
//                 <br />
//                 <Link to="/manage-items">Back</Link>
//             </form>
//         </div>
//     )
// }

// export default CreateItem
