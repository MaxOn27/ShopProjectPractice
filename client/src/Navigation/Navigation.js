import React from 'react';

import NavigationRoutes from "./NavigationRoutes";
import NavigationLinks from "./NavigationLinks";

import classes from "./styles/Navigation.module.css";

const Navigation = () => {
    return (
        <div>
            <NavigationLinks/>
            <main className={classes.link_content}>
                <NavigationRoutes/>
            </main>
        </div>
    );
};

export default Navigation;