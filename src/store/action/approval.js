
import {
    APPROVAL_LIST_FAILURE, 
    APPROVAL_LIST_SUCCESS,
    APPROVAL_LIST_REQUEST,


    COMMENT_LIST_FAILURE,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    
    
} from '../actionType/approval'

export const addCommentRequest = (payload) =>({
  type :ADD_COMMENT_REQUEST,
  payload
})

export const addCommentSuccess= (payload) =>({
  type :ADD_COMMENT_SUCCESS,
  payload
})

export const addCommentFailure = (payload) =>({
  type :ADD_COMMENT_FAILURE,
  payload
})

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
