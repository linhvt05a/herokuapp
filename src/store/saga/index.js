import { all } from "redux-saga/effects";

import {
  currencyListWatcher,
  currencyDetailWatcher,
  currencyEditWatcher,
  currencyAddWatcher
} from './currencySaga';

import {
  shippingDetailWatcher,
  shippingListlWatcher,
  shippingSellOpenlWatcher,
  shippingSellOpenListlWatcher,
  shippingSellOpenCartWatcher
} from "./shippingSaga"
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

function* allSaga() {
  yield all([
    currencyListWatcher(),
    currencyDetailWatcher(),
    currencyEditWatcher(),
    currencyAddWatcher(),
    shippingDetailWatcher(),
    shippingListlWatcher(),
    shippingSellOpenlWatcher(),
    shippingSellOpenListlWatcher(),
    shippingSellOpenCartWatcher(),
    regionListWatcher(),
    provinceListWatcher(),
    typeListWatcher(),
    statusListWatcher(),
    projectListWatcher(),
    projectDetailWatcher(),
  ]);
}


export default allSaga;