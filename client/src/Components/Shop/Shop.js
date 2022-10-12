import React, {useEffect, useState} from 'react';

import classes from "../Styles/components.module.css";
import Axios from "axios";

const Shop = () => {
    const [products, setProducts] = useState([{
        id: 1,
        title: "Product",
        imageUrl: "https://toppng.com/uploads/preview/open-book-115494189764c5rqgceul.png",
        price: "13.99",
        description: "Awesome book"
        }]);

    const loadProducts = async () => {
        const response = await Axios.get("http://localhost:8080/api/get")
        setProducts(response.data)
    };

    useEffect(() => {
        // Axios.get("http://localhost:8080/api/get")
            /*.then(response => {
                console.log(response)*/
                // setProducts(response.data)
            // })
        loadProducts();
    }, []);

    return (
        <div className={classes.product_card_wrapper}>
            {products.map((product) => (
                <div key={product.id} className={classes.product_card}>
                    <h3>{product.title}</h3>
                    <img src={product.imageUrl} alt="/"/>
                    <h4>${product.price}</h4>
                </div>
            ))}
        </div>
    );
};

export default Shop;