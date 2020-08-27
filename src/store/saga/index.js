import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"
import visitRegisterSaga from './visitRegisterSaga'
import promotionSaga from './promotionSaga'
import newsSaga from './newsSaga'
import newsDetailSaga from './newsDetailSaga'

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga(), visitRegisterSaga(), 
    newsSaga(), promotionSaga(), newsDetailSaga()
  ]);
}

export default allSaga;