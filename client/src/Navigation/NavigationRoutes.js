import React from 'react';
import {Route, Routes} from "react-router-dom";

import Shop from "../Components/Shop/Shop";
import Cart from "../Components/Cart/Cart";
import AddProduct from "../Components/AddProduct/AddProduct";
import UserInfo from "../Components/UserInfo/UserInfo";

const NavigationRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/add-product" element={<AddProduct/>}/>
                <Route path="/user-info" element={<UserInfo/>}/>
            </Routes>
    );
};

export default NavigationRoutes;