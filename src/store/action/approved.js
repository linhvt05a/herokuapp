
import {
    APPROVED_LIST_FAILURE, 
    APPROVED_LIST_SUCCESS,
    APPROVED_LIST_REQUEST
} from '../actionType/approved'

export const approvedListRequest = (approveList) => ({
  type: APPROVED_LIST_REQUEST,
  approveList,
});

export const approvedListSuccess = (approveList) => ({
    type: APPROVED_LIST_SUCCESS,
    approveList,
  });

  
export const approvedListFailure = (approveList) => ({
    type: APPROVED_LIST_FAILURE,
    approveList,
  });
