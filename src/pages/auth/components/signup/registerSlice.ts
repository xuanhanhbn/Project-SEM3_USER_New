import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requestRegister,responseRegister } from './type';
import { RootState } from 'store/store';

export interface RegisterState {
  loading: boolean;
  isSuccess:boolean;
}

const initialState: RegisterState = {
  loading: false,
  isSuccess:false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    onRegister(state,action:PayloadAction<requestRegister>) {
      state.loading = true;
    },
    onRegisterSuccess(state, action: PayloadAction<responseRegister>) {
      state.loading = false;
      state.isSuccess = true
    },
    onRegisterFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const registerActions = registerSlice.actions;

// Selectors
export const selectRegister = (state: RootState) => state.register

// Reducer
const registerReducer = registerSlice.reducer;
export default registerReducer;
