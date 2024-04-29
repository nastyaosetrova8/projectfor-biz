import { createSlice } from "@reduxjs/toolkit";
import {
  addProductThunk,
  editProductThunk,
  getProductsThunk,
} from "../Thunks/ProductsThunk";
import { initialProductsState } from "../initialState";
import { handlePending, handleRejected } from "./rootSlice";

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  extraReducers: (builder) =>
    builder
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.total = payload.total;
      })

      .addCase(addProductThunk.fulfilled, (state, { payload }) => {
        state.products.unshift(payload);
      })

      .addCase(editProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          (item) => item._id === payload._id
        );
        if (index !== -1) {
          state.products[index] = payload;
        }
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productsReducer = productsSlice.reducer;
