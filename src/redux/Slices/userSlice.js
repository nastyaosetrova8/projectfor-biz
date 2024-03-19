import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../initialState";
import {
  currentUserThunk,
  logOutUserThunk,
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "../Thunks/userThunk";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logOutUserThunk.fulfilled, (state) => {
        state.user = { name: null, email: null, _id: null };
        state.token = null;
        state.isRefreshing = false;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.avatar = action.payload.userAvatar;
      });
  },
});

export const userReducer = userSlice.reducer;