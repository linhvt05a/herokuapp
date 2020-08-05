import { all } from "redux-saga/effects";

import { 
   currencyListWatcher,
   currencyDetailWatcher, 
   currencyEditWatcher,
   currencyAddWatcher
} from './currencySaga';
<<<<<<< HEAD

import {
    shippingDetailWatcher,
    shippingListlWatcher,
    shippingSellOpenlWatcher,
    shippingSellOpenListlWatcher,
    shippingSellOpenCartWatcher
} from "./shippingSaga"

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
        shippingSellOpenCartWatcher()
    ]);
=======
import { 
  regionListWatcher,
  provinceListWatcher,
  typeListWatcher,
  statusListWatcher
} from './dashboardSaga';

function* allSaga() {
  yield all([
    currencyListWatcher(),
    currencyDetailWatcher(),
    currencyEditWatcher(),
    currencyAddWatcher(),
    
    regionListWatcher(),
    provinceListWatcher(),
    typeListWatcher(),
    statusListWatcher()
  ]);
>>>>>>> origin/develop
}

export default allSaga;