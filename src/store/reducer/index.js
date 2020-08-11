import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import cart from "./cartReducer";
import project from "./projectReducer";
import product_request from './approveListReducer';
import request_cart from './requestCartReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    cart, project,
    product_request, request_cart
});
export default allReducers; 