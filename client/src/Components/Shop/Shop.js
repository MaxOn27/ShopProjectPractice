import React, {useEffect, useState} from 'react';

import classes from "../Styles/components.module.css";
import Axios from "axios";

const Shop = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/get")
    //         .then(response => {
    //             console.log(response)
    //             setProducts(response.data)
    //         })
    // }, []);

    return (
        <div className={classes.product_card_wrapper}>
            here
            {/*{products.map((product) => (*/}
            {/*    <div key={product.id} className={classes.product_card}>*/}
            {/*        <h3>{product.title}</h3>*/}
            {/*        <img src={product.imageUrl} alt="/"/>*/}
            {/*        <h4>${product.price}</h4>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

export default Shop;