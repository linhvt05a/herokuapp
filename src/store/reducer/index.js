import  currency from './currencyReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    currency,
});
export default allReducers;