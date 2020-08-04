import { all } from "redux-saga/effects";

import {
    currencyListWatcher,
    currencyDetailWatcher,
    currencyEditWatcher,
    currencyAddWatcher
} from './currencySaga';

import {
    shippingDetailWatcher,
    shippingListlWatcher
} from "./shippingSaga"

function* allSaga() {
    yield all([
        currencyListWatcher(),
        currencyDetailWatcher(),
        currencyEditWatcher(),
        currencyAddWatcher(),
        shippingDetailWatcher(),
        shippingListlWatcher()
    ]);
}

export default allSaga;