import examReducer from "./examReducer";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";
import projectReducer from "./projectReducer"
import transactionReducer from "./transactionReducer"
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    examReducer,
    productReducer,
    productDetailReducer,
    projectReducer,
    transactionReducer,
});
export default allReducers; 