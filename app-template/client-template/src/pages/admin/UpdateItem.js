import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { Title, PageWrapper } from '../../styles/Styling';

function UpdateItem({ match }) {
    const productId = match.params.productId;
    // const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchProduct();
    }, []);

    //////////// Form Hooks//////////////////////
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    /////////////////////////////////////////////


    const fetchProduct = async () => {
        const res = await fetch(`http://localhost:5000/products/${productId}`);
        const productData = await res.json();
        console.log(productData);

        setTitle(productData.title);
        setDescription(productData.description);
        setPrice(productData.price);
        setStock(productData.stock);
        setCategory(productData.category);
        setImg(productData.img);
    };

    ///////////Update Handler////////////////
    const handleSubmit = async (formData) => {
        try {
            await fetch(`http://localhost:5000/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            history.push("/manage-items");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PageWrapper>
            <Title>Update Product</Title>
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
                formId="update-item"
            />
        </PageWrapper>
    );
}

export default UpdateItem;
