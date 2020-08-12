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
  projectListWatcher
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
  promotionListWatcher
} from './requestCartSaga'
import {
  customerListWatcher,
} from './customerSaga';
  
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
    //project
    projectListWatcher(),
    projectDetailWatcher(),
    sellopenListWatcher(),
    bankingListWatcher(),
    salepolicyListWatcher(),

    // approval
    commentListWatcher(),
    approveListWatcher(),
    addCommentWatcher(),
    requestDataWatcher(),
    promotionListWatcher(),

    //customer
    customerListWatcher(),
  ]);
}


export default allSaga;