import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { partnerActions } from "./partnerSlice";
import { responsePartnersList, responseDataPartnersList } from "./type";
import getPartnerDataApi from "./api";

function* onGetPartnerData() {
  try {
    const response: responsePartnersList<responseDataPartnersList> = yield call(
      getPartnerDataApi.getPartner
    );
    if (response.data) {
      // Response chứa dữ liệu, put data
      yield put(partnerActions.getListPartnerSuccess(response));
    } else {
      // Response không chứa dữ liệu, thực hiện thao tác khác
      yield put(partnerActions.getListPartnerFailed());
    }
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(partnerActions.getListPartnerFailed());
  }
}

export default function* partnerSaga() {
  yield takeLatest(partnerActions.getListPartner, onGetPartnerData);
}
