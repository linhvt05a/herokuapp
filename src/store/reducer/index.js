import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard
});
export default allReducers;