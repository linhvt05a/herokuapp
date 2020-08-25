import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer, productReducer
});
export default allReducers; 