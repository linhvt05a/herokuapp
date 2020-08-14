
const name = 'CUSTOMER_';
const actions = {

  CUSTOMER_LIST_REQUEST: name + 'CUSTOMER_LIST_REQUEST',
  CUSTOMER_LIST_FAILURE: name + 'CUSTOMER_LIST_FAILURE',
  CUSTOMER_LIST_SUCCESS: name + 'CUSTOMER_LIST_SUCCESS',
  //create
  CUSTOMER_CREATE_CONTRACT_REQUEST: name + 'CUSTOMER_CREATE_CONTRACT_REQUEST',
  CUSTOMER_CREATE_CONTRACT_FAILURE: name + 'CUSTOMER_CREATE_CONTRACT_FAILURE',
  CUSTOMER_CREATE_CONTRACT_SUCCESS: name + 'CUSTOMER_CREATE_CONTRACT_SUCCESS',

  //accounting
  CUSTOMER_ACCOUNTING_CONTRACT_REQUEST: name + 'CUSTOMER_ACCOUNTING_CONTRACT_REQUEST',
  CUSTOMER_ACCOUNTING_CONTRACT_FAILURE: name + 'CUSTOMER_ACCOUNTING_CONTRACT_FAILURE',
  CUSTOMER_ACCOUNTING_CONTRACT_SUCCESS: name + 'CUSTOMER_ACCOUNTING_CONTRACT_SUCCESS',

  //promotion
  CUSTOMER_PROMOTION_CONTRACT_REQUEST: name + 'CUSTOMER_PROMOTION_CONTRACT_REQUEST',
  CUSTOMER_PROMOTION_CONTRACT_FAILURE: name + 'CUSTOMER_PROMOTION_CONTRACT_FAILURE',
  CUSTOMER_PROMOTION_CONTRACT_SUCCESS: name + 'CUSTOMER_PROMOTION_CONTRACT_SUCCESS',

  requestCustomerList: (params) => ({
    type: actions.CUSTOMER_LIST_REQUEST,
    params
  }),
  requestCustomerCreateContract: (params) => ({
    type: actions.CUSTOMER_CREATE_CONTRACT_REQUEST,
    params
  }),
  requestCustomerPromotionContract: (params) => ({
    type: actions.CUSTOMER_PROMOTION_CONTRACT_REQUEST,
    params
  }),
};
export default actions;
