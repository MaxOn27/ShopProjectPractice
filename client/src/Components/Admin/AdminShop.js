import React, {Fragment} from 'react';

import ProductList from "../../utils/ProductList";

const AdminShop = () => {
    return (
        <Fragment>
            <ProductList isAdmin={true}/>
        </Fragment>
    );
};

export default AdminShop;