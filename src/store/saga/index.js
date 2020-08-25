import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import productSaga from "./productSage";
import projectSaga from "./projectSaga";
import transactionSaga from "./transactionSaga";

function* allSaga() {
  yield all([
    examSaga(),
    productSaga(),
    projectSaga(),
    transactionSaga(),
  ]);
}

export default allSaga;