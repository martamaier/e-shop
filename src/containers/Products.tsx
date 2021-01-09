import React, {useEffect} from 'react';
import {Product} from "../models/Product";
import ProductCard from "../components/Product";
import classes from './Products.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {LoadProducts} from "../store/product-store/actions";
import {getIsLoading, getProducts} from "../store/product-store/selectors";
import {CartItem} from "../models/Cart";
import {AddItemToCart, RemoveItemFromCart} from "../store/cart-store/actions";

function Products() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const products = useSelector(getProducts);
    const addToCart = (cartItem: CartItem) => {
        dispatch(AddItemToCart(cartItem));
    }
    const removeFromCart = (cartItem: CartItem) => {
        dispatch(RemoveItemFromCart(cartItem));
    }

    useEffect(() => {
        dispatch(LoadProducts());
    }, [dispatch]);

    return (
        <div className={classes.products}>
            {
                isLoading ?
                    <p>Content is loading...</p> :
                    products.map((product: Product) => (
                        <ProductCard
                            onClick={addToCart}
                            onRemove={removeFromCart}
                            {...product}
                            key={product.id}/>
                    ))
            }
        </div>
    )
}

export default Products;
