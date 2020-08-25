import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga()
  ]);
}

export default allSaga;