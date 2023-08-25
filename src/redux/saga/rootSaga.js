import { all } from 'redux-saga/effects';
import { watchFetchData } from '../saga/fetchApiSaga';

export default function* rootSaga() {
  yield all([watchFetchData()]);
}