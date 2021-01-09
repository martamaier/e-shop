import React from "react";
import classes from './Banner.module.scss';

function Banner() {
    return (
        <div>
            <img
                className={classes.banner}
                src="https://via.placeholder.com/1920x500"
                alt="banner"/>
        </div>
    );
}

export default Banner;
