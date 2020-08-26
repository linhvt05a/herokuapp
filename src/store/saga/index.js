import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"
import visitRegisterSaga from './visitRegisterSaga'

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga(), visitRegisterSaga()
  ]);
}

export default allSaga;