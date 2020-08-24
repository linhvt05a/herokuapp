import examReducer from "./examReducer";
import productReducer from "./productReducer";
import { combineReducers } from 'redux';


const allReducers = combineReducers({

    examReducer,
    productReducer,
});
export default allReducers; 