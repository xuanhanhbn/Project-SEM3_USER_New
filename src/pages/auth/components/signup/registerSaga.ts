import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { registerActions } from "./registerSlice";
import { requestRegister, responseRegister } from "./type";
import registerApi from "./api";

function* onRegister(action: requestRegister) {
  try {
    const response: responseRegister = yield call(registerApi.login, action);
    yield put(registerActions.onRegisterSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(registerActions.onRegisterFailed());
  }
}

function* watchRegisterFlow() {
  while (true) {
    const isRegisteredIn = Boolean(localStorage.getItem("access_token"));

    if (!isRegisteredIn) {
      const action: requestRegister = yield take(registerActions.onRegister.type);
      yield fork(onRegister, action);
    }
  }
}

export default function* registerSaga() {
  yield fork(watchRegisterFlow);
}
