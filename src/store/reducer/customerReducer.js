import {
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAILURE
} from '../actionType/customer'
  
  const initialState = {
    customerList: { success:false },
    isFetching: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case CUSTOMER_LIST_REQUEST:
        return { ...state, isFetching: true, customerList: { success: false } };
      case CUSTOMER_LIST_SUCCESS:
        return { ...state, isFetching: false, customerList: action.response };
      case CUSTOMER_LIST_FAILURE:
        return { ...state, isFetching: false, customerList: { success: false, error: action.error } };

      default:
        return state;
    }
  }