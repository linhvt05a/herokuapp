import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"

function* allSaga() {
  yield all([
    examSaga(), projectSaga()
  ]);
}

export default allSaga;