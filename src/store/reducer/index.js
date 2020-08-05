import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer"
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping
});
export default allReducers;