import examReducer from "./examReducer";
import projectReducer from "./projectReducer"
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer
});
export default allReducers; 