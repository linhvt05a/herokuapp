import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import visitRegisterReducer from './visitRegisterReducer'
import promotionReducer from './promotionReducer'
import newsReducer from './newsReducer'
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer, productReducer,
    visitRegisterReducer, promotionReducer, newsReducer
});
export default allReducers; 