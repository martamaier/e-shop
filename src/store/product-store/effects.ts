import {ActionsObservable, ofType} from "redux-observable";
import {AddProducts, LoadProductsError, ProductsActions, ProductsActionTypes} from "./actions";
import {catchError, map, switchMap, take} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import axios, {AxiosResponse} from "axios";
import {Product} from "../../models/Product";

const productsUrl = 'https://fakestoreapi.com/products';

export const loadProducts$ = (action$: ActionsObservable<ProductsActionTypes>) => action$
    .pipe(
        ofType(ProductsActions.LoadProducts),
        take(1),
        switchMap((action) => {
            return fromPromise(axios.get(`${productsUrl}?limit=5`)).pipe(
                map((res: AxiosResponse<Product[]>) => AddProducts(res.data)),
                catchError((error: Error) => [LoadProductsError(error.message)]),
            )
        }),
    );
