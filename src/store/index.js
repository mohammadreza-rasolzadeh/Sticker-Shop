import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productsReducer, { fetchProducts } from "../reducers/productSlice";
import cartReducer, { getTotals } from "../reducers/cartSlice";
import { productApi } from "../reducers/productApi";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(fetchProducts());
store.dispatch(getTotals());