import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { loginActions } from "./loginSlice";
import { responseLogin, requestLogin } from "./type";
import loginApi from "./api";

function* onLogin(action: requestLogin) {
  try {
    const response: responseLogin = yield call(loginApi.login, action);
    yield put(loginActions.onLoginSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(loginActions.onLoginFailed());
  }
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: requestLogin = yield take(loginActions.onLogin.type);
      yield fork(onLogin, action);
    }
  }
}

export default function* loginSaga() {
  yield fork(watchLoginFlow);
}
