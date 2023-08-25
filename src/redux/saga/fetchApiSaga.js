import { takeLatest, call, put } from 'redux-saga/effects';
import {  fetchDataSuccess, fetchDataFailure } from '../action/fetchApiAction';
import { FETCH_DATA } from '../types/Types';
import { fetchDataFromAPI } from '../../api/FetchApi';

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI);
    console.log("data response in saga file ===>",data)
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}