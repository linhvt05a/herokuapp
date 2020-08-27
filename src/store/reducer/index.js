import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import visitRegisterReducer from './visitRegisterReducer'
import promotionReducer from './promotionReducer'
import newsReducer from './newsReducer'
import newsDetailReducer from './newsDetailReducer'
import hotNewsReducer from './hotNewsReducer'
import productListReducer from './productListReducer'
import productSignupReducer from './productSignupReducer'
import productIncentiveReducer from './productIncentiveReducer'
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer, productReducer,
    visitRegisterReducer, promotionReducer,
    newsReducer, newsDetailReducer, hotNewsReducer,
    productListReducer, productSignupReducer, productIncentiveReducer
});
export default allReducers; 