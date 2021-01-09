import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import product from './product-store/reducer';
import {ProductState} from "./product-store";
import {loadProducts$} from "./product-store/effects";
import {CartState} from "./cart-store";
import cart from './cart-store/reducer';

export interface RootState {
    product: ProductState,
    cart: CartState,
}

const reducers = combineReducers({
    product,
    cart,
});

const rootEpic = combineEpics(loadProducts$);
const epicMiddleware = createEpicMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
    const store = createStore(
        reducers,
        {},
        composeEnhancers(applyMiddleware(epicMiddleware)),
    );

    epicMiddleware.run(rootEpic);

    return store;
}
