import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer";
import product from "./productReducer"
import product_request from './approveListReducer'
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping,
    product,
    product_request
});
export default allReducers; 