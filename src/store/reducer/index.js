import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import commonReducer from "./commonReducer";
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer, productReducer, commonReducer
});
export default allReducers; 