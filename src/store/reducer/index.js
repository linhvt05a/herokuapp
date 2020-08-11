import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import cart from "./cartReducer";
import project from "./projectReducer";
import product_request from './approveListReducer';
import productDetail from './productReducer'
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    cart, project,
    product_request,
    productDetail
});
export default allReducers; 