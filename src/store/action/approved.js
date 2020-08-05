
import {
    APPROVED_LIST_FAILURE, 
    APPROVED_LIST_SUCCESS,
    APPROVED_LIST_REQUEST
} from '../actionType/approved'

export const approvedListFailure = (approve) => ({
    type: APPROVED_LIST_FAILURE,
    approve,
  });

  export const approvedListSuccess = (approve) => ({
    type: APPROVED_LIST_SUCCESS,
    approve,
  });

  export const approvedListRequest = (approve) => ({
    type: APPROVED_LIST_REQUEST,
    approve,
  });