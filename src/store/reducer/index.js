import examReducer from "./examReducer";
import productReducer from "./productReducer";
import projectReducer from "./projectReducer"
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer,
    productReducer,
    projectReducer,
});
export default allReducers; 