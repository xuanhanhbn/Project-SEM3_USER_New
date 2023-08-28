import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { requestChangePassword, responseChangePassword } from "./type";

export interface ChangePasswordState {
  loading: boolean;
  isSuccess: boolean;
}

const initialState: ChangePasswordState = {
  loading: false,
  isSuccess: false,
};

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    onChangePassword(state, action: PayloadAction<requestChangePassword>) {
      state.loading = true;
    },
    onChangePasswordSuccess(
      state,
      action: PayloadAction<responseChangePassword>
    ) {
      state.loading = false;
      state.isSuccess = true;
    },
    onChangePasswordFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const changePasswordActions = changePasswordSlice.actions;

// Selectors
export const selectchangePassword = (state: RootState) => state.changePassword;

// Reducer
const changePasswordReducer = changePasswordSlice.reducer;
export default changePasswordReducer;
