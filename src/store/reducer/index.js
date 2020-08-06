import currency from './currencyReducer';
import dashboard from './dashboardReducer';
import shipping from "./shippingReducer";
import project from "./projectReducer";
import approveList from './approveListReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency, dashboard,
    shipping, project, approveList
});
export default allReducers; 