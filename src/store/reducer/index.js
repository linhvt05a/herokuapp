import examReducer from "./examReducer";
import projectReducer from "./projectReducer";
import productReducer from "./productReducer";
import visitRegisterReducer from './visitRegisterReducer'
import commonReducer from './commonReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({

    examReducer, projectReducer, productReducer,
    visitRegisterReducer, commonReducer
});
export default allReducers; 