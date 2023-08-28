import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requestLogin, responseLogin } from './type';
import { RootState } from 'store/store';

export interface LoginState {
  loading: boolean;
  isSuccess:boolean;
}

const initialState: LoginState = {
  loading: false,
  isSuccess:false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    onLogin(state,action:PayloadAction<requestLogin>) {
      state.loading = true;
    },
    onLoginSuccess(state, action: PayloadAction<responseLogin>) {
      state.loading = false;
      state.isSuccess = true
    },
    onLoginFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const loginActions = loginSlice.actions;

// Selectors
export const selectLogin = (state: RootState) => state.login

// Reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
