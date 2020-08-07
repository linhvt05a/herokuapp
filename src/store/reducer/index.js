import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer";
import product from "./productReducer"
import approveList from './approveListReducer'
import customer from './customerReducer'
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping,
    product,
    approveList,
    customer
});
export default allReducers; 