import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productsApi";
import { currentUserThunk } from "./userThunk";

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async ({ page, pageSize, sort, search }) => {
    // try {
    const data = await getProducts({ page, pageSize, sort, search });
    // console.log(data)
    return data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.message);
    // }
  }
);

export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (products, thunkAPI) => {
    try {
      const data = await addProduct(products);
      // thunkAPI.dispatch(updateBalance(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProductThunk = createAsyncThunk(
  "products/editProduct",
  async (dataEdit, thunkAPI) => {
    try {
      const newProduct = await updateProduct(dataEdit);
      // thunkAPI.dispatch(getProductsThunk());
      // thunkAPI.dispatch(currentUserThunk());
      return newProduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (idProduct, thunkAPI) => {
    const data = await deleteProduct(idProduct);
    thunkAPI.dispatch(getProductsThunk());
    thunkAPI.dispatch(currentUserThunk());
    return data;
  }
);
