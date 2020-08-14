import { all } from "redux-saga/effects";
import {
  currencyListWatcher,
  currencyDetailWatcher,
  currencyEditWatcher,
  currencyAddWatcher
} from './currencySaga';
import {
  cartDetailWatcher,
  cartListlWatcher,
  cartSellOpenlWatcher,
  cartSellOpenListlWatcher,
  cartSellOpenCartWatcher,
  filterAreaWatcher,
  filterBlockWatcher,
  filterFloorWatcher,
  filterProjectStatusWatcher,
  filterListOpenSaleWatcher
} from "./cartSaga"
import {
  regionListWatcher,
  provinceListWatcher,
  typeListWatcher,
  statusListWatcher,
  projectListWatcher,
  dataTotalWatcher
} from './dashboardSaga';
import {
  projectDetailWatcher,
  sellopenListWatcher,
  bankingListWatcher,
  salepolicyListWatcher
} from './projectSaga';
import {
  commentListWatcher,
  approveListWatcher,
  addCommentWatcher
} from './approval'
import {
  requestDataWatcher,
  promotionListWatcher,
  promotionProductWatcher
} from './requestCartSaga'
import {
  productDetaillWatcher
} from './productSaga'
import {
  paymentListWatcher, policyListWatcher, policyProgressListWatcher
} from './contract'
import
  customerSaga
from "./customerSaga"

function* allSaga() {
  yield all([
    currencyListWatcher(),
    currencyDetailWatcher(),
    currencyEditWatcher(),
    currencyAddWatcher(),
    //cart
    cartDetailWatcher(),
    cartListlWatcher(),
    cartSellOpenlWatcher(),
    cartSellOpenListlWatcher(),
    cartSellOpenCartWatcher(),
    //filter
    filterAreaWatcher(),
    filterBlockWatcher(),
    filterFloorWatcher(),
    filterProjectStatusWatcher(),
    filterListOpenSaleWatcher(),
    regionListWatcher(),
    provinceListWatcher(),
    typeListWatcher(),
    statusListWatcher(),
    dataTotalWatcher(),
    projectListWatcher(),
    //project
    projectDetailWatcher(),
    sellopenListWatcher(),
    bankingListWatcher(),
    salepolicyListWatcher(),
    commentListWatcher(),
    approveListWatcher(),
    addCommentWatcher(),
    requestDataWatcher(),
    promotionListWatcher(),
    promotionProductWatcher(),
    productDetaillWatcher(),
    paymentListWatcher(),
    policyListWatcher(),
    policyProgressListWatcher(),
    //customer
    customerSaga(),
  ]);
}

export default allSaga;