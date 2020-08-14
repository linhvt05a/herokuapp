import { actionsCustomer } from "../action"

const initialState = {
  customerList: [],
  createContract: { success: false },
  promotionContract: { success: false },

  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionsCustomer.CUSTOMER_LIST_SUCCESS:
      return { ...state, isFetching: false, customerList: action.response };
    case actionsCustomer.CUSTOMER_LIST_FAILURE:
      return { ...state, isFetching: false, customerList: { success: false, error: action.error } };

    case actionsCustomer.CUSTOMER_CREATE_CONTRACT_SUCCESS:
      return { ...state, isFetching: false, createContract: action.response };
    case actionsCustomer.CUSTOMER_CREATE_CONTRACT_FAILURE:
      return { ...state, isFetching: false, createContract: { success: false, error: action.error } };

    case actionsCustomer.CUSTOMER_PROMOTION_CONTRACT_SUCCESS:
      return { ...state, isFetching: false, promotionContract: action.response };
    case actionsCustomer.CUSTOMER_PROMOTION_CONTRACT_FAILURE:
      return { ...state, isFetching: false, promotionContract: { success: false, error: action.error } };

    default:
      return state;
  }
}