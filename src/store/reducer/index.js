import currency from './currencyReducer';
import dashboard from './dashboardReducer';
<<<<<<< HEAD
import shipping from "./shippingReducer";
import product from "./productReducer"
import approveList from './approveListReducer'
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping,
    product,
    approveList
});
export default allReducers; 