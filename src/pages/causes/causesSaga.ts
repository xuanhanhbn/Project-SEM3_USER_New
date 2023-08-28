import { call, put, takeLatest, delay, fork, take } from "redux-saga/effects";
import { causesActions } from "./causesSlice";
import { responseCausesList, responseDataCausesList } from "./type";
import getCausesDataApi from "./api";

function* onGetCausesData() {
  try {
    const response: responseCausesList<responseDataCausesList> = yield call(
      getCausesDataApi.getCauses
    );
    // Sẽ cần kiểm tra điều kiện khi nào thành công thì mới put data, nhưng hiện tại chưa xác định được response nên sẽ để tạm như này
    yield put(causesActions.getListCausesSuccess(response));
  } catch (error) {
    console.log("Failed to fetch city list", error);
    yield put(causesActions.getListCausesFailed());
  }
}

export default function* causesSaga() {
  yield takeLatest(causesActions.getListCauses, onGetCausesData);
}
