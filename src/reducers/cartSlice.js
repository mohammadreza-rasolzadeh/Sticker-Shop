import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalAmout: 0,
    cartTotalQty: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQty: state.cartItems[existingIndex].cartQty++,
                };
                toast.info("تعداد افزایش یافت");
            } else {
                const tempProductItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty,
                };
                state.cartItems.push(tempProductItem);
                toast.success("محصول به سبد خرید اضافه شد");
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals(state, action) {
            let { total, qty } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQty } = cartItem;
                    const itemTotal = price * qty;
                    cartTotal.total += itemTotal;
                    cartTotal.qty += cartQty;
                    return cartTotal;
                }, { toatl: 0, qty: 0 }
            );
            total = parseFloat(total.toFixed());
            state.cartTotalAmout = total;
            state.cartTotalQty = qty;
        },
    },
});

export default cartSlice.reducer;

export const { addToCart, getTotals } = cartSlice.actions;