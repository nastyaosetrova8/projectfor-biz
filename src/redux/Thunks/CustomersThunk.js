// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { token } from 'Api/authApi';
// import { updateBalance } from 'redux/Slices/AuthUserSlice';
// import { getCurrentUserThunk } from './AuthUserThunk';
// import { addCustomer, deleteCustomer, getCustomers, updateCustomer } from 'services/customersApi';

import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCustomer, deleteCustomer, getCustomers, updateCustomer } from "../../services/customersApi";
import { currentUserThunk } from "./userThunk";

export const getCustomersThunk = createAsyncThunk(
  "customers/getCustomers",
  async () => {
    const data = await getCustomers();
    // console.log(data)
    return data;
  }
);

export const addCustomerThunk = createAsyncThunk(
  "customers/addCustomer",
  async (customers, thunkAPI) => {
    try {
      const data = await addCustomer(customers);
      // thunkAPI.dispatch(updateBalance(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCustomerThunk = createAsyncThunk(
  "customers/editCustomer",
  async (dataEdit, thunkAPI) => {
    try {
      const newCustomer = await updateCustomer(dataEdit);
      thunkAPI.dispatch(getCustomersThunk());
      thunkAPI.dispatch(currentUserThunk());
      return newCustomer;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCustomerThunk = createAsyncThunk(
  "customers/deleteCustomer",
  async (idCustomer, thunkAPI) => {
    const data = await deleteCustomer(idCustomer);
    thunkAPI.dispatch(getCustomersThunk());
    thunkAPI.dispatch(currentUserThunk());
    return data;
  }
);

// export const getCustomerCategoriesThunk = createAsyncThunk(
//   'customers/getCustomerCategories',
//   async (tokenCustomer, thunkAPI) => {
//     try {
//       token.set(tokenCustomer);
//       const data = await getCustomerCategories();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
