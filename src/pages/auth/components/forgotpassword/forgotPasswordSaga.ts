import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { forgotPasswordActions } from "./forgotPasswordSlice";
import { requestForgotPassword, responseForgotPassword } from "./type";
import forgotPasswordApi from "./api";

function* onForgotPassword(action: requestForgotPassword) {
  try {
    const response: responseForgotPassword = yield call(
      forgotPasswordApi.forgotPassword,
      action
    );
    yield put(forgotPasswordActions.onForgotPasswordSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(forgotPasswordActions.onForgotPasswordFailed());
  }
}

function* watchForgotPasswordFlow() {
  while (true) {
    const createNewPass = Boolean(localStorage.getItem("access_token"));

    if (!createNewPass) {
      const action: requestForgotPassword = yield take(
        forgotPasswordActions.onForgotPassword.type
      );
      yield fork(onForgotPassword, action);
    }
  }
}

export default function* forgotPasswordSaga() {
  yield fork(watchForgotPasswordFlow);
}
