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
import contactReducer from './contactReducer'
import juridicalSupportReducer from './juridicalSupportReducer'
import newsFilterReducer from './newsFilterReducer'
import visitorReducer from './visitorReducer'
import productDetailReducer from './productDetailReducer'
import newsCategoriesReducer from './newsCategoriesReducer'
import projectSelectReducer from './projectSelectReducer'
import legalCategoriesReducer from './legalCategoriesReducer'
import legalListReducer from './legalListReducer'
import accountReducer from './accountReducer'
import commentNewsReducer from './commentNewsReducer'
import newsCommentListReducer from './newsCommentListReducer'
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    examReducer, projectReducer, productReducer,commonReducer,transactionReducer,productDetailReducer,
    visitRegisterReducer, promotionReducer,
    newsReducer, newsDetailReducer, hotNewsReducer,
    productListReducer, productSignupReducer, productIncentiveReducer,
    contactReducer, juridicalSupportReducer, newsFilterReducer, visitorReducer,
    newsCategoriesReducer, projectSelectReducer, 
    accountReducer,
    legalCategoriesReducer, legalListReducer, commentNewsReducer,newsCommentListReducer
});
export default allReducers; 