import { all } from "redux-saga/effects";

import { 
   currencyListWatcher,
   currencyDetailWatcher, 
   currencyEditWatcher,
   currencyAddWatcher
} from './currencySaga';
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
}

export default allSaga;