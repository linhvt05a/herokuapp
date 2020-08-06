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
  productDetaillWatcher
} from './productSaga';

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
    productDetaillWatcher()
  ]);
}


export default allSaga;