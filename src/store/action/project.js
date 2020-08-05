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

//project detail
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