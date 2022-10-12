import React from 'react';

import classes from "../Styles/components.module.css";

const UserInfo = () => {
    return (
        <div className={classes.user_info}>
            <label>Name: </label><p>Max</p>
            <label>Surname: </label><p>Tyzhnenko</p>
            <label>G-mail: </label><p>test@test.com</p>
        </div>
    );
};

export default UserInfo;