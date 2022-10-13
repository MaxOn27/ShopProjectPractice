import React from 'react';
import {Route, Routes} from "react-router-dom";

import Shop from "../Components/Shop/Shop";
import Cart from "../Components/Cart/Cart";
import AddProduct from "../Components/AddProduct/AddProduct";
import UserInfo from "../Components/UserInfo/UserInfo";
import ProductInfo from "../Components/ProductInfo/ProductInfo";

const NavigationRoutes = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/add-product" element={<AddProduct/>}/>
                <Route path="/user-info" element={<UserInfo/>}/>
                <Route path="/product-info" element={<ProductInfo/>}></Route>

            </Routes>
    );
};

export default NavigationRoutes;