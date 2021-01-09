import {CartState, INITIAL_STATE} from "./index";
import {CartActions, CartActionTypes} from "./actions";
import * as _ from 'lodash';
import {CartItem} from "../../models/Cart";

export default function reducer(
    state: CartState = INITIAL_STATE,
    action: CartActionTypes,
) {

    const newState = _.cloneDeep(state);

    switch (action.type) {
        case CartActions.AddItemToCart:
            const newItem: CartItem = (action.payload as CartItem);
            const oldItem = newState.items
                .find((item: CartItem) => item.id === newItem.id);

            if (oldItem) {
                const filteredItems = newState.items
                    .filter((item: CartItem) => item.id !== newItem.id);

                const updatedItem = {
                    id: newItem.id,
                    quantity: oldItem.quantity + newItem.quantity,
                };
                return {
                    ...newState,
                    items: [...filteredItems, updatedItem],
                }
            } else {
                return {
                    ...newState,
                    items: [...newState.items, action.payload],
                }
            }
        case CartActions.RemoveItemFromCart:
            const itemToRemove: CartItem = (action.payload as CartItem);
            const oldItemToRemove = newState.items.find((item: CartItem) => item.id === itemToRemove.id);
            const itemsLeft = _.get(oldItemToRemove, 'quantity', 0) - itemToRemove.quantity;

            if (itemsLeft) {
                const updatedItem: CartItem = {
                    id: itemToRemove.id,
                    quantity: itemsLeft,
                }
                return {
                    ...newState,
                    items: [...newState.items.filter((item: CartItem) => item.id !== itemToRemove.id), updatedItem],
                }
            } else {
                return {
                    ...newState,
                    items: newState.items.filter((item: CartItem) => item.id !== itemToRemove.id),
                }
            }

        case CartActions.ClearCart:
            return {
                ...newState,
                items: [],
            }

        default:
            return state;
    }
}
