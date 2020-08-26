import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"
import visitRegisterSaga from './visitRegisterSaga'
import commonSaga from './commonSaga'
function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga(), visitRegisterSaga(), commonSaga()
  ]);
}

export default allSaga;