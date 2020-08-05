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
  statusListWatcher,
  projectListWatcher
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
    statusListWatcher(),
    projectListWatcher()
  ]);
}

export default allSaga;