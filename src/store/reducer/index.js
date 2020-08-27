import examReducer from "./examReducer";
import productReducer from "./productReducer";
import visitRegisterReducer from './visitRegisterReducer'
import promotionReducer from './promotionReducer'
import newsReducer from './newsReducer'
import newsDetailReducer from './newsDetailReducer'
import hotNewsReducer from './hotNewsReducer'
import productListReducer from './productListReducer'
import productSignupReducer from './productSignupReducer'
import productIncentiveReducer from './productIncentiveReducer'
import projectReducer from './projectReducer'
import commonReducer from './commonReducer'
import transactionReducer from './transactionReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    examReducer, projectReducer, productReducer,commonReducer,transactionReducer,
    visitRegisterReducer, promotionReducer,
    newsReducer, newsDetailReducer, hotNewsReducer,
    productListReducer, productSignupReducer, productIncentiveReducer
});
export default allReducers; 