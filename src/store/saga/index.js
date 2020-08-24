import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import productSaga from "./productSage";
import projectSaga from "./projectSaga";

function* allSaga() {
  yield all([
    examSaga(),
    productSaga(),
    projectSaga(),
  ]);
}

export default allSaga;