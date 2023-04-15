import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async() => {
        try {
            const response = await axios.get("http://localhost:9000/stickers");
            return response.data;
        } catch (err) {
            console.log(err.message);
        }
    }
);

const initialState = {
    items: [],
    status: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
});

export default productsSlice.reducer;