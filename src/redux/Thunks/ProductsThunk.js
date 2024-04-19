import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productsApi";

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async ({ page, pageSize, sort, search }, thunkAPI) => {
    try {
      const data = await getProducts({ page, pageSize, sort, search });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (products, thunkAPI) => {
    try {
      const data = await addProduct(products);
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
      return newProduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (idProduct, thunkAPI) => {
    try {
      const data = await deleteProduct(idProduct);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
