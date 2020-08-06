import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer"
import approveList from './approveListReducer'
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping, approveList
});
export default allReducers; 