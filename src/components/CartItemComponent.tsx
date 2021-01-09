import React from "react";
import {CartItem} from "../models/Cart";
import {Product} from "../models/Product";
import classes from './CartItemComponent.module.scss';

function CartItemComponent(
    { quantity, image, title, price }: CartItem & Product
) {
    const totalPrice = (quantity * price).toFixed(2);

    return (
        <div className={classes.cartItem}>
            <img
                className={classes.thumbnail}
                src={image}
                alt={title}
            />
            <h3>{title}</h3>
            <span>{quantity}</span>
            <span>{price}</span>
            <span>{totalPrice}</span>
        </div>);
}

export default CartItemComponent;
