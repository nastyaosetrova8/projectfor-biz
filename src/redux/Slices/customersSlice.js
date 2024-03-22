import { createSlice } from "@reduxjs/toolkit";
import {
  addCustomerThunk,
  editCustomerThunk,
  getCustomersThunk,
} from "../Thunks/CustomersThunk";
import { initialListsState } from "../initialState";

const customersSlice = createSlice({
  name: "customers",
  initialState: initialListsState,
  extraReducers: (builder) =>
    builder

      .addCase(getCustomersThunk.fulfilled, (state, { payload }) => {
        state.customers = payload.customers;
        state.recentCustomers = payload.recentCustomers;
        state.total = payload.total;
      })

      .addCase(addCustomerThunk.fulfilled, (state, { payload }) => {
        state.customers.push(payload);
      })

      .addCase(editCustomerThunk.fulfilled, (state, { payload }) => {
        const index = state.customers.findIndex((item) => item.id === payload);
        state.customers.splice(index, 1);
      }),

  //   .addCase(getCustomerCategoriesThunk.fulfilled, (state, { payload }) => {
  //     state.categories = payload;
  //   }),
});

export const customersReducer = customersSlice.reducer;
