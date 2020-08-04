import currency from './currencyReducer';
import shipping from "./shippingReducer"
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency,
    shipping
});
export default allReducers;