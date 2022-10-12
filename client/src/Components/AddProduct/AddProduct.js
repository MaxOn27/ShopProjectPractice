import React, {Fragment, useState, useEffect} from 'react';
import Axios from "axios";

import classes from "../Styles/components.module.css";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const addProduct = () => {
        Axios.post("http://localhost:8080/api/post", {
            title: title,
            imageUrl: imageUrl,
            price: price,
            description: description
        }).then((req, res) => {
            console.log(res);
            alert("Success");
        }).catch(err => console.log(err));
    };

    return (
        <Fragment>
            <form action="/" method="post" className={classes.add_product} onSubmit={addProduct}>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" placeholder="Title"
                       onChange={(event) => setTitle(event.target.value)}/>
                <label htmlFor="imageUrl">Image URL</label>
                <input name="imageUrl" type="text" placeholder="Image URL"
                       onChange={(event) => setImageUrl(event.target.value)}/>
                <label htmlFor="price">Price</label>
                <input name="price" type="text" placeholder="Price"
                       onChange={(event) => setPrice(event.target.value)}/>
                <label htmlFor="description">Description</label>
                <input name="description" type="text" placeholder="Description"
                       onChange={(event) => setDescription(event.target.value)}/>
                <button className={classes.submit_add_product}>Submit</button>
            </form>
        </Fragment>
    );
};

export default AddProduct;