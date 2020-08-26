import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import visitRegisterReducer from './visitRegisterReducer'
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer, projectReducer, productReducer,
    visitRegisterReducer
});
export default allReducers; 