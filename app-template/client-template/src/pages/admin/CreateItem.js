import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { Title } from '../../styles/Styling';


const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");

    const history = useHistory();

    const handleSubmit = async (formData) => {
        try {
            await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            history.push("/manage-items");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Title>Create Product</Title>
            <ProductForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
                stock={stock}
                setStock={setStock}
                category={category}
                setCategory={setCategory}
                handleSubmit={handleSubmit}
                img={img}
                setImg={setImg}
                formId="create-item"
            />
        </div>
    );
}

export default CreateItem;
