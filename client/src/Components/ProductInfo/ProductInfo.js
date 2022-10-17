import React from 'react';
import {useLocation} from "react-router-dom";

import classes from "../Styles/components.module.css";

const ProductInfo = () => {

    const {state} = useLocation();

    return (
        <div className={classes.description_wrapper}>
            <input type="hidden" value={state.id}/>
            <h1>{state.title}</h1>
            <img src={state.imageUrl} alt="/"/>
            <h3 className={classes.description_price}>${state.price}</h3>
            <h3 className={classes.description}>{state.description}</h3>
        </div>
    );
};

export default ProductInfo;