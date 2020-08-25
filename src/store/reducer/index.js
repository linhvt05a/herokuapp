import examReducer from "./examReducer";
import productReducer from "./productReducer";
import projectReducer from "./projectReducer"
import transactionReducer from "./transactionReducer"
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    examReducer,
    productReducer,
    projectReducer,
    projectReducer,
    transactionReducer,
});
export default allReducers; 