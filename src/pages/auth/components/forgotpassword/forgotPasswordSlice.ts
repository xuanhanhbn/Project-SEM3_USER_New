import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { requestForgotPassword, responseForgotPassword } from "./type";

export interface ForgotPasswordState {
  loading: boolean;
  isSuccess: boolean;
}

const initialState: ForgotPasswordState = {
  loading: false,
  isSuccess: false,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    onForgotPassword(state, action: PayloadAction<requestForgotPassword>) {
      state.loading = true;
    },
    onForgotPasswordSuccess(
      state,
      action: PayloadAction<responseForgotPassword>
    ) {
      state.loading = false;
      state.isSuccess = true;
    },
    onForgotPasswordFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const forgotPasswordActions = forgotPasswordSlice.actions;

// Selectors
export const selectForgotPassword = (state: RootState) => state.forgotPassword;

// Reducer
const forgotPasswordReducer = forgotPasswordSlice.reducer;
export default forgotPasswordReducer;
