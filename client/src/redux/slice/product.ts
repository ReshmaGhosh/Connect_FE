import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Product = {
    id: number;
    title: string;
    price: number;
};

export const fetchProducts = createAsyncThunk("products/fetchProducts",
async () => {
    const response = await axios.get("http://localhost:4000/products");
    return response.data as Product[];
  }

);

const productsSlice = createSlice({
    name: "products",
    initialState: [] as Product[],
    reducers: {},
    extraReducers: (builder) => {
     builder.addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
     });
    },

});

export default productsSlice.reducer;
