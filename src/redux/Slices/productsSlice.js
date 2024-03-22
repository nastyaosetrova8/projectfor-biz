import { createSlice } from "@reduxjs/toolkit";
import {
  addProductThunk,
  editProductThunk,
  getProductsThunk,
} from "../Thunks/ProductsThunk";
import { initialProductsState } from "../initialState";

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
        state.products.push(payload);
      })

      .addCase(editProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex((item) => item.id === payload);
        state.products.splice(index, 1);
      }),

  //   .addCase(getProductCategoriesThunk.fulfilled, (state, { payload }) => {
  //     state.categories = payload;
  //   }),
});

export const productsReducer = productsSlice.reducer;
