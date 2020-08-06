import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer";
import product from "./productReducer"
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping,
    product,
});
export default allReducers; 