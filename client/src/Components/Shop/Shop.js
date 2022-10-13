import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import classes from "../Styles/components.module.css";
import Axios from "axios";

const Shop = () => {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await Axios.get(
            "http://localhost:8080/api/get-products"
        );
        setProducts(response.data);
    };

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
                        <Link className={classes.more} to="/product-info">
                            More
                        </Link>
                </div>
            ))}
        </div>
    );
};

export default Shop;