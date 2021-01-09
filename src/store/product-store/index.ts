import {Product} from "../../models/Product";

export interface ProductState {
    products: Product[],
    isLoading: boolean,
    errorMessage: string | null,
}

export const INITIAL_STATE: ProductState = {
    products: [],
    isLoading: false,
    errorMessage: null,
}
