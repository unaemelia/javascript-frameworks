import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <h2>Create New Category</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <button onClick={addCategory}>Add</button>
            <br />
            <br />
            <Link to="/create-item">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default CreateCategory;