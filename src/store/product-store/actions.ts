import {Product} from "../../models/Product";

export enum ProductsActions {
    LoadProducts = '[Products] Load Products',
    AddProducts = '[Products] Add Products',
    LoadProductsError = '[Products] Load Products Error',
}

export interface ProductsActionTypes {
    type: ProductsActions,
    payload?: Product | number | string | Product[],
}

export function LoadProducts(): ProductsActionTypes {
    return {
        type: ProductsActions.LoadProducts,
    }
}

export function AddProducts(payload: Product[]): ProductsActionTypes {
    return {
        payload,
        type: ProductsActions.AddProducts,
    }
}

export function LoadProductsError(payload: string): ProductsActionTypes {
    return {
        payload,
        type: ProductsActions.LoadProductsError,
    }
}
