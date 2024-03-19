import { createSlice } from "@reduxjs/toolkit";
import { initialRootState } from "../initialState";

export function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { payload }) {
  // { error }) {
  // notifyRegisterError(error.message);
  state.isLoading = false;
  // state.error = error.message;
  state.error = payload;
}

export function handleFulfilled(state) {
  state.isLoading = false;
}

const rootSlice = createSlice({
  name: 'root',
  initialState: initialRootState,
  reducers:{setError: (state) => {state.error = null}},
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});


export const {setError} = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
