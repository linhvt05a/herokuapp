import { put, takeLatest } from "redux-saga/effects";
import {sysProjectService} from "../../services";
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

// project list
export function* projectList(payload) {
    const token = payload.project.token;
    const page = payload.project.page;
    const search = payload.project.search;
    try {
        const response = yield sysProjectService.project(token, search, page);
        response.success ? yield put({ type: PROJECT_LIST_SUCCESS, response }) : yield put({ type: PROJECT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PROJECT_LIST_FAILURE, err });
    }
}
export function* projectListWatcher() {
    yield takeLatest(PROJECT_LIST_REQUEST, projectList);
}

// project detail
export function* projectDetail(payload) {
    console.log('Detail Load', payload);
    const token = payload.project.token;
    const id = payload.project.id;
    try {
        const response = yield sysProjectService.projectDetail(token, id);
        response.success ? yield put({ type: PROJECT_DETAIL_SUCCESS, response }) : yield put({ type: PROJECT_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: PROJECT_DETAIL_FAILURE, err });
    }
}
export function* projectDetailWatcher() {
    yield takeLatest(PROJECT_DETAIL_REQUEST, projectDetail);
}

// project edit
export function* projectEdit(payload) {
    const token = payload.project.token;
    const id = payload.project.id;
    const name = payload.project.name;
    const code = payload.project.code;
    try {
        const response = yield(sysProjectService.projectEdit(token, id, name, code));
        if(response.success){
            yield put({ type: PROJECT_EDIT_SUCCESS, response })
            yield put({ type: PROJECT_DETAIL_REQUEST, project: { token, id } })
        } else {
            yield put({ type: PROJECT_EDIT_FAILURE, response });
        };
    } catch (err) {
        yield put({ type: PROJECT_EDIT_FAILURE, err });
    }
}
export function* projectEditWatcher() {
    yield takeLatest(PROJECT_EDIT_REQUEST, projectEdit);
}

// project add
export function* projectAdd(payload) {
    const token = payload.project.token;
    const name = payload.project.name;
    const code = payload.project.code;
    try {
        const response = yield sysProjectService.projectAdd(token, name, code);
        if(response.success){
            yield put({ type: PROJECT_ADD_SUCCESS, response })
        } else {
            yield put({ type: PROJECT_ADD_FAILURE, response });
        };
    } catch (err) {
        yield put({ type: PROJECT_ADD_FAILURE, err });
    }
}
export function* projectAddWatcher() {
    yield takeLatest(PROJECT_ADD_REQUEST, projectAdd);
}