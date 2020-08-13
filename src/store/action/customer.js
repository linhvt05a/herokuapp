import {
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAILURE
} from '../actionType/customer'

export const customerListRequest = (payload) => ({
  type: CUSTOMER_LIST_REQUEST,
  payload,
});

export const customerListSuccess = (payload) => ({
    type: CUSTOMER_LIST_SUCCESS,
    payload,
  });

  
export const customerListFailure = (payload) => ({
    type: CUSTOMER_LIST_FAILURE,
    payload,
});
