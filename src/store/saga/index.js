import { all } from "redux-saga/effects";
import examSaga from "./examSaga";
import projectSaga from "./projectSaga"
import commonSaga from "./commonSaga"
import productSaga from "./productSaga"
import visitRegisterSaga from './visitRegisterSaga'
import promotionSaga from './promotionSaga'
import newsSaga from './newsSaga'
import newsDetailSaga from './newsDetailSaga'
import hotNewsSaga from './hotNewsSaga'
import productListSaga from './productListSaga'
import productSignupSaga from './productSignupSaga'
import productIncentiveSaga from './productIncentiveSaga'
import contactAddSaga from './contactAddSaga'
import juridicalSupportSaga from './juridicalSupportSaga'
import transactionSaga from './transactionSaga';
import newsFilterSaga from './newsFilterSaga'
import visitorSaga from './visitorSaga'
import productDetailSaga from './productDetailSaga'
import newsCategoriesSaga from './newsCategoriesSaga'
import projectSelectSaga from './projectSelectSaga'
import legalCategoriesSaga from './legalCategoriesSaga';
import legalListSaga from './legalListSaga'
import commentNewsSaga from './commentNewsSaga'
import newsCommentListSaga from './newsCommentListSaga'
function* allSaga() {
  yield all([
    examSaga(), projectSaga(), commonSaga(), productSaga(), visitRegisterSaga(), transactionSaga(),
    newsSaga(), promotionSaga(), newsDetailSaga(), hotNewsSaga(),
    productListSaga(), productSignupSaga(), productIncentiveSaga(),
    contactAddSaga(), juridicalSupportSaga(), newsFilterSaga(), visitorSaga(),
    productDetailSaga(), newsCategoriesSaga(), projectSelectSaga(), 
    legalCategoriesSaga(), legalListSaga(), commentNewsSaga(), newsCommentListSaga()
  ]);
}

export default allSaga;