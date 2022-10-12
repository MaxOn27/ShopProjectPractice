import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./styles/Navigation.module.css";

const NavigationLinks = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-product">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-info">My info</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
);
};

export default NavigationLinks;