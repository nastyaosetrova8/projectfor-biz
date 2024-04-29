import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../initialState";
import {
  currentUserThunk,
  logOutUserThunk,
  loginUserThunk,
  registerUserThunk,
} from "../Thunks/userThunk";
import { handlePending, handleRejected } from "./rootSlice";
import { notifyTokenExpired } from "../../shared/components/NotificationToastify/Toasts";

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
        // state.isLoggedIn = true;
      })
      .addCase(logOutUserThunk.fulfilled, (state) => {
        state.user = { name: null, email: null, _id: null };
        state.token = null;
        // state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addCase(logOutUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })

      .addCase(currentUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
        state.token = null;
        notifyTokenExpired(action.payload);
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const userReducer = userSlice.reducer;
