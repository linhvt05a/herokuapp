import examReducer from "./examReducer";
import productReducer from "./productReducer";
import promotionReducer from './promotionReducer'
import newsReducer from './newsReducer'
import projectReducer from './projectReducer'
import commonReducer from './commonReducer'
import transactionReducer from './transactionReducer'
import legalReducer from './legalReducer'
import contactAddReducer from './contactAddReducer'
import visitorReducer from './visitorReducer'
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import recruitmentReducer from './recruitmentReducer'
import liveStreamReducer from './liveStreamReducer'
const allReducers = combineReducers({
    examReducer, projectReducer, 
    productReducer,commonReducer,
    transactionReducer,
    promotionReducer,legalReducer,
    newsReducer,contactAddReducer,
    visitorReducer,
    accountReducer,
    recruitmentReducer,
    liveStreamReducer
});
export default allReducers; 