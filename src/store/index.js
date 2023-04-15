import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productReducer, { fetchProducts } from "../reducers/productSlice";
import { productApi } from "../reducers/productApi";
import cartReducer, { getTotals } from "../reducers/cartSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(fetchProducts());
store.dispatch(getTotals())