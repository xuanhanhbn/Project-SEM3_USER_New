import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { contactActions } from "./contactSlice";
import { requestContact, responseContact } from "./type";
import contactApi from "./api";

function* onContact(action: requestContact) {
  try {
    const response: responseContact = yield call(contactApi.contact, action);
    yield put(contactActions.onContactSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(contactActions.onContactFailed());
  }
}

function* watchContactFlow() {
  while (true) {
    const isContact = Boolean(localStorage.getItem("access_token"));

    if (!isContact) {
      const action: requestContact = yield take(contactActions.onContact.type);
      yield fork(onContact, action);
    }
  }
}

export default function* contactSaga() {
  yield fork(watchContactFlow);
}
