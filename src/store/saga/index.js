import { all } from "redux-saga/effects";

import { 
   currencyListWatcher,
   currencyDetailWatcher, 
   currencyEditWatcher,
   currencyAddWatcher
  } from './currencySaga';

function* allSaga() {
  yield all([
    currencyListWatcher(),
    currencyDetailWatcher(),
    currencyEditWatcher(),
    currencyAddWatcher(),
  ]);
}

export default allSaga;