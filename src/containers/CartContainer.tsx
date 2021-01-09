import React from "react";
import {useSelector} from "react-redux";
import {getProductCartItems, getTotalCartItemsCount} from "../store/cart-store/selectors";
import {CartItem} from "../models/Cart";
import CartItemComponent from "../components/CartItemComponent";
import {Product} from "../models/Product";

function CartContainer() {
    const total = useSelector(getTotalCartItemsCount);
    const productsInCart = useSelector(getProductCartItems);

    return (
        <>
            <h3>Cart</h3>
            <h4>Total items in cart: {total}</h4>
            {
                productsInCart.map((item: CartItem & Product) => (
                    <CartItemComponent
                        {...item}
                        key={item.id} />
                ))
            }
        </>
    );
}

export default CartContainer;
