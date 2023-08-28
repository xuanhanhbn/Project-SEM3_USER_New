import { call, put, takeLatest,delay,fork,take } from 'redux-saga/effects';
import { aboutActions } from './aboutSlice';
import { responseAboutList, responseDataAboutList } from './type';
import getAboutDataApi from './api';

function* onGetAboutData() {
  try {
    const response: responseAboutList<responseDataAboutList> = yield call(getAboutDataApi.getAbout);
    if (response.data) {
      // Response chứa dữ liệu, put data
      yield put(aboutActions.getListAboutSuccess(response));
    } else {
      // Response không chứa dữ liệu, thực hiện thao tác khác
      yield put(aboutActions.getListAboutFailed());
    }
  } catch (error) {
    console.log('Failed to fetch city list', error);
    yield put(aboutActions.getListAboutFailed());
  }
}


export default function* aboutSaga() {
  yield takeLatest(aboutActions.getListAbout,onGetAboutData);

}
