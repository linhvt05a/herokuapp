import { all } from "redux-saga/effects";
import examSaga from "./examSaga"

function* allSaga() {
  yield all([
    examSaga()
  ]);
}

export default allSaga;