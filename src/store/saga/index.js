import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"
import commonSaga from "./commonSaga"

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga(), commonSaga()
  ]);
}

export default allSaga;