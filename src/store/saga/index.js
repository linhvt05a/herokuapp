import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import productSaga from "./productSaga"
import visitRegisterSaga from './visitRegisterSaga'
import promotionSaga from './promotionSaga'
import newsSaga from './newsSaga'
import newsDetailSaga from './newsDetailSaga'
import hotNewsSaga from './hotNewsSaga'
import productListSaga from './productListSaga'
import productSignupSaga from './productSignupSaga'
import productIncentiveSaga from './productIncentiveSaga'
import transactionSaga from './transactionSaga';

function* allSaga() {
  yield all([
    examSaga(), projectSaga(), productSaga(), visitRegisterSaga(), transactionSaga(),
    newsSaga(), promotionSaga(), newsDetailSaga(), hotNewsSaga(),
    productListSaga(), productSignupSaga(), productIncentiveSaga()
  ]);
}

export default allSaga;