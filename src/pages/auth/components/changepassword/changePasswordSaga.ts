import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { changePasswordActions } from "./changePasswordSlice";
import { requestChangePassword, responseChangePassword } from "./type";
import changePasswordApi from "./api";

function* onChangePassword(action: requestChangePassword) {
  try {
    const response: responseChangePassword = yield call(
      changePasswordApi.changePassword,
      action
    );
    yield put(changePasswordActions.onChangePasswordSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(changePasswordActions.onChangePasswordFailed());
  }
}

function* watchChangePasswordFlow() {
  while (true) {
    const createNewPass = Boolean(localStorage.getItem("access_token"));

    if (!createNewPass) {
      const action: requestChangePassword = yield take(
        changePasswordActions.onChangePassword.type
      );
      yield fork(onChangePassword, action);
    }
  }
}

export default function* changePasswordSaga() {
  yield fork(watchChangePasswordFlow);
}
