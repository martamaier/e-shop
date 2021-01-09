import {RootState} from "../index";
import {Product} from "../../models/Product";

export const getIsLoading = (state: RootState): boolean => state.product.isLoading;
export const getProducts = (state: RootState): Product[] => state.product.products;
