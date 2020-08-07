import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer";
import project from "./projectReducer";
import product_request from './approveListReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping, project, 
    product_request
});
export default allReducers; 