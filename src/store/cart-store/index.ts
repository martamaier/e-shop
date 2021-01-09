import {CartItem} from "../../models/Cart";

export interface CartState {
    items: CartItem[];
}

export const INITIAL_STATE: CartState = {
    items: [],
}
