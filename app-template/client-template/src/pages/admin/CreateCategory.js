import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Title, Button } from '../../styles/Styling';

const CreateCategory = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const addCategory = async () => {
        const object = {
            title: title,
        };
        try {
            await fetch("http://localhost:5000/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(object),
            });
            history.push("/create-item");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Title>Create New Category</Title>
            <input
                className="create-category-input"
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <Button onClick={addCategory}>Add</Button>
            <br />
            <br />
            <Link to="/create-item">
                <Button>Back</Button>
            </Link>
        </div>
    );
};

export default CreateCategory;