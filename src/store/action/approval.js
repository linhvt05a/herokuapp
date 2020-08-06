
import {
    APPROVAL_LIST_FAILURE, 
    APPROVAL_LIST_SUCCESS,
    APPROVAL_LIST_REQUEST,

    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAILURE
    
} from '../actionType/approval'

export const commentListRequest = (payload) =>({
  type :COMMENT_LIST_REQUEST,
  payload
})

export const commentListSuccess= (payload) =>({
  type :COMMENT_LIST_SUCCESS,
  payload
})

export const commentListFailure = (payload) =>({
  type :COMMENT_LIST_FAILURE,
  payload
})

export const approvedListRequest = (payload) => ({
  type: APPROVAL_LIST_REQUEST,
  payload,
});

export const approvedListSuccess = (payload) => ({
    type: APPROVAL_LIST_SUCCESS,
    payload,
  });

  
export const approvedListFailure = (payload) => ({
    type: APPROVAL_LIST_FAILURE,
    payload,
  });
