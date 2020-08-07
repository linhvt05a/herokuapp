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
  filterProjectStatusWatcher
} from "./cartSaga"
import {
  regionListWatcher,
  provinceListWatcher,
  typeListWatcher,
  statusListWatcher,
  projectListWatcher
} from './dashboardSaga';
import {
  projectDetailWatcher
} from './projectSaga';
import {
  commentListWatcher, 
  approveListWatcher} from './approval'
  
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

    regionListWatcher(),
    provinceListWatcher(),
    typeListWatcher(),
    statusListWatcher(),
    projectListWatcher(),
    projectDetailWatcher(),
    commentListWatcher(),
    approveListWatcher()
  ]);
}


export default allSaga;