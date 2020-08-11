import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAILURE,

  PROJECT_DETAIL_REQUEST,
  PROJECT_DETAIL_SUCCESS,
  PROJECT_DETAIL_FAILURE,

  PROJECT_EDIT_REQUEST,
  PROJECT_EDIT_SUCCESS,
  PROJECT_EDIT_FAILURE,

  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_FAILURE,

  SELLOPEN_LIST_REQUEST,
  SELLOPEN_LIST_SUCCESS,
  SELLOPEN_LIST_FAILURE,

  BANKING_LIST_REQUEST,
  BANKING_LIST_SUCCESS,
  BANKING_LIST_FAILURE,

  POLICY_SALE_LIST_REQUEST,
  POLICY_SALE_LIST_SUCCESS,
  POLICY_SALE_LIST_FAILURE,
} from '../actionType/project';

//project list
export const projectListRequest = (project) => ({
  type: PROJECT_LIST_REQUEST,
  project,
});
export const projectListSuccess = (project) => ({
  type: PROJECT_LIST_SUCCESS,
  project,
});
export const projectListFailure = (project) => ({
  type: PROJECT_LIST_FAILURE,
  project,
});

//project Detail
export const projectDetailRequest = (project) => ({
  type: PROJECT_DETAIL_REQUEST,
  project,
});
export const projectDetailSuccess = (project) => ({
  type: PROJECT_DETAIL_SUCCESS,
  project,
});
export const projectDetailFailure = (project) => ({
  type: PROJECT_DETAIL_FAILURE,
  project,
});

//project edit
export const projectEditRequest = (project) => ({
  type: PROJECT_EDIT_REQUEST,
  project,
});
export const projectEditSuccess = (project) => ({
  type: PROJECT_EDIT_SUCCESS,
  project,
});
export const projectEditFailure = (project) => ({
  type: PROJECT_EDIT_FAILURE,
  project,
});

//project add
export const projectAddRequest = (project) => ({
  type: PROJECT_ADD_REQUEST,
  project,
});
export const projectAddSuccess = (project) => ({
  type: PROJECT_ADD_SUCCESS,
  project,
});
export const projectAddFailure = (project) => ({
  type: PROJECT_ADD_FAILURE,
  project,
});

//Sell open list project
export const SellOpenListRequest = (SellOpen) => ({
  type: SELLOPEN_LIST_REQUEST,
  SellOpen,
});
export const SellOpenListSuccess = (SellOpen) => ({
  type: SELLOPEN_LIST_SUCCESS,
  SellOpen,
});
export const SellOpenListFailure = (SellOpen) => ({
  type: SELLOPEN_LIST_FAILURE,
  SellOpen,
});

//banking list project
export const bankingListRequest = (banking) => ({
  type: BANKING_LIST_REQUEST,
  banking,
});
export const bankingListSuccess = (banking) => ({
  type: BANKING_LIST_SUCCESS,
  banking,
});
export const bankingListFailure = (banking) => ({
  type: BANKING_LIST_FAILURE,
  banking,
});

//sale policy list project
export const salepolicyListRequest = (salepolicy) => ({
  type: POLICY_SALE_LIST_REQUEST,
  salepolicy,
});
export const salepolicyListSuccess = (salepolicy) => ({
  type: POLICY_SALE_LIST_SUCCESS,
  salepolicy,
});
export const salepolicyListFailure = (salepolicy) => ({
  type: POLICY_SALE_LIST_FAILURE,
  salepolicy,
});