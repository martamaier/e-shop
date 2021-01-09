import React from 'react';
import {ExitToApp, Person, ShoppingCart} from "@material-ui/icons";
import classes from './Header.module.scss';

function Header() {
    return (
        <header className={classes.appHeader}>
            <div>
                <img
                    src="https://via.placeholder.com/250x80"
                    alt="logo"/>
            </div>
            <div>
                <form>
                    <input type="text"/>
                    <button type="submit">Find</button>
                </form>
            </div>
            <div>
                <Person />
                <ShoppingCart />
                <ExitToApp />
            </div>
        </header>
    )
}

export default Header;
