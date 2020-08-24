import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import productSaga from "./productSage";

function* allSaga() {
  yield all([
    examSaga(),
    productSaga(),
  ]);
}

export default allSaga;