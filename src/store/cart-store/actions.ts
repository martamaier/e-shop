import {CartItem} from "../../models/Cart";

export enum CartActions {
    AddItemToCart = '[Cart] Add item to cart',
    AddItemsToCart = '[Cart] Add items to cart',
    RemoveItemFromCart = '[Cart] Remove item from cart',
    RemoveItemsFromCart = '[Cart] Remove items from cart',
    ClearCart = '[Cart] Clear cart',
}

export interface CartActionTypes {
    type: CartActions,
    payload?: number | CartItem | CartItem[],
}

export function AddItemToCart(payload: CartItem): CartActionTypes {
    return {
        payload,
        type: CartActions.AddItemToCart,
    } as {
        type: CartActions.AddItemToCart,
        payload: CartItem,
    }
}

export function ClearCart(): CartActionTypes {
    return {
        type: CartActions.ClearCart,
    }
}

export function RemoveItemFromCart(payload: CartItem): CartActionTypes {
    return {
        payload,
        type: CartActions.RemoveItemFromCart,
    }
}
