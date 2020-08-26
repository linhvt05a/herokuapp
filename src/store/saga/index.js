import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import productSaga from "./productSaga";
import productDetailSaga from "./productDetailSaga";
import projectSaga from "./projectSaga";
import commonSaga from "./commonSaga"
import transactionSaga from "./transactionSaga";

function* allSaga() {
  yield all([
    examSaga(),
    productSaga(),
    productDetailSaga(),
    projectSaga(),
    transactionSaga(),
    commonSaga(),
  ]);
}

export default allSaga;