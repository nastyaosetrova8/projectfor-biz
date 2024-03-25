import { createSlice } from "@reduxjs/toolkit";
import { initialModalState } from "../initialState";

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggleShowModal: (state, { payload }) => {
      state.isShowModal = !state.isShowModal;
      state.modalName = payload;
    },
    saveId: (state, { payload }) => {
      state.savedId = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModal, saveId } = modalSlice.actions;
