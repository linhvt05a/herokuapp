import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import commonSaga from "./commonSaga"
import productSaga from "./productSaga"
import promotionSaga from './promotionSaga'
import newsSaga from './newsSaga'
import transactionSaga from './transactionSaga';
import productDetailSaga from './productDetailSaga'
import legalSaga from './legalSaga'
import contactAddSaga from './contactAddSaga'

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), commonSaga(), productSaga(),
    transactionSaga(),newsSaga(), promotionSaga(), 
    productDetailSaga(), legalSaga(), contactAddSaga()

  ]);
}

export default allSaga;