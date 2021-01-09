import {RootState} from "../index";
import * as _ from "lodash";
import {Product} from "../../models/Product";
import {CartItem} from "../../models/Cart";

export const getCartItems = (state: RootState) => state.cart.items;
export const getTotalCartItemsCount = (state: RootState) =>
    _.sumBy(state.cart.items, 'quantity');

export const getProductCartItems = (state: RootState): (Product & CartItem)[] => {
    return state.cart.items.map((cartItem: CartItem) => (
        _.merge(
            {},
            cartItem,
            state.product.products.find((product: Product) => product.id === cartItem.id),
            ) as Product & CartItem
    ));
}
