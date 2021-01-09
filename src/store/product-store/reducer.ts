import {INITIAL_STATE, ProductState} from "./index";
import {ProductsActions, ProductsActionTypes} from "./actions";
import * as _ from 'lodash';
import {Product} from "../../models/Product";

export default function (
    state: ProductState = INITIAL_STATE,
    action: ProductsActionTypes,
) {
    const newState = _.cloneDeep(state);

    switch (action.type) {
        case ProductsActions.LoadProducts:
            return {
                ...newState,
                isLoading: true,
            }
        case ProductsActions.AddProducts:
            return {
                ...newState,
                products: [...newState.products, ...action.payload as Product[]],
                isLoading: false,
            }
        case ProductsActions.LoadProductsError:
            return {
                ...newState,
                errorMessage: action.payload,
                isLoading: false,
            }
        default:
            return state;
    }
}
