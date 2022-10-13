import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Axios from "axios";

import classes from "../Components/Styles/components.module.css";

const ProductList = ({isAdmin}) => {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await Axios.get(
            "http://localhost:8080/api/get-products"
        );
        setProducts(response.data);
    };

    const deleteProduct = (id) => {
        Axios.delete(`http://localhost:8080/api/remove-product/${id}`)
            .then((products) => console.log(products))
            .catch(error => console.log(error));

        setTimeout(() => loadProducts(), 200);
    }

    let deleteAndEditProductFragment = (id) => {
        if (isAdmin === true) {
            return (
                <Fragment>
                    <button className={classes.edit_product}>Edit</button>
                    <button className={classes.delete_product}
                            onClick={() => deleteProduct(id)}>Delete
                    </button>
                </Fragment>
            )
        }
    }

    useEffect(() => {
        loadProducts()
            .then(() => console.log("products", products))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div className={classes.product_card_wrapper}>
            {products.map((product) => (
                <div key={product.id} className={classes.product_card}>
                    <h3>{product.title}</h3>
                    <img src={product.imageUrl} alt="/"/>
                    <h4>${product.price}</h4>
                    <div className={classes.card_btn}>
                        <Link className={classes.more} to="/product-info">
                            More
                        </Link>
                        {deleteAndEditProductFragment(product.id)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;