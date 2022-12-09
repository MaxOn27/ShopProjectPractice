import React, {Fragment, useState, useEffect} from 'react';

import classes from "../Styles/components.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";

const UpdateProduct = () => {
    const [updatedProduct, setUpdatedProduct] = useState({
            title: "",
            imageUrl: "",
            price: "",
            description: ""
        }
    );
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        setUpdatedProduct(state);
    }, [state]);

    const updateProduct = async (event) => {
        event.preventDefault();
        const id = state.id;

        await Axios.put(
            `http://localhost:8080/api/update-product/${id}`,
            updatedProduct
        )
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));

        setTimeout(() =>  navigate("/admin-shop"), 200);
        return window.location.reload()
    };


    return (
        <Fragment>
            <form action="/" method="put"
                  className={classes.add_product} onSubmit={updateProduct}>
                <label htmlFor="title">Title</label>
                <input name="title"
                       type="text"
                       placeholder="Title"
                       value={updatedProduct.title}
                       onChange={(event) => setUpdatedProduct(() => {
                           return {
                               id: updatedProduct.id,
                               title: event.target.value,
                               imageUrl: updatedProduct.imageUrl,
                               price: updatedProduct.price,
                               description: updatedProduct.description
                           }
                       })}/>
                <label htmlFor="imageUrl">Image URL</label>
                <input name="imageUrl"
                       type="text"
                       placeholder="Image URL"
                       value={updatedProduct.imageUrl}
                       onChange={(event) => setUpdatedProduct(() => {
                           return {
                               id: updatedProduct.id,
                               title: updatedProduct.title,
                               imageUrl: event.target.value,
                               price: updatedProduct.price,
                               description: updatedProduct.description
                           }
                       })}/>
                <label htmlFor="price">Price</label>
                <input name="price"
                       type="text"
                       placeholder="Price"
                       value={updatedProduct.price}
                       onChange={(event) => setUpdatedProduct(() => {
                           return {
                               id: updatedProduct.id,
                               title: updatedProduct.title,
                               imageUrl: updatedProduct.imageUrl,
                               price: event.target.value,
                               description: updatedProduct.description
                           }
                       })}/>
                <label htmlFor="description">Description</label>
                <input name="description"
                       type="text"
                       placeholder="Description"
                       value={updatedProduct.description}
                       onChange={(event) => setUpdatedProduct(() => {
                           return {
                               id: updatedProduct.id,
                               title: updatedProduct.title,
                               imageUrl: updatedProduct.imageUrl,
                               price: updatedProduct.price,
                               description: event.target.value
                           }
                       })}/>
                <button
                    className={classes.submit_add_product}
                    onClick={() =>
                        setTimeout(() =>
                            navigate("/admin-shop"), 200)}
                >
                    Submit
                </button>
            </form>
        </Fragment>
    );
};

export default UpdateProduct;