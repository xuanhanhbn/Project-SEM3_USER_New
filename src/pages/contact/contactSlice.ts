import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { requestContact,responseContact } from "./type";

export interface ContactState {
  loading: boolean;
  isSuccess: boolean;
}

const initialState: ContactState = {
  loading: false,
  isSuccess: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    onContact(state, action: PayloadAction<requestContact>) {
      state.loading = true;
    },
    onContactSuccess(
      state,
      action: PayloadAction<responseContact>
    ) {
      state.loading = false;
      state.isSuccess = true;
    },
    onContactFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const contactActions = contactSlice.actions;

// Selectors
export const selectCntact = (state: RootState) => state.contact;

// Reducer
const contactReducer = contactSlice.reducer;
export default contactReducer;
