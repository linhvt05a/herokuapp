import { put, takeLatest } from "redux-saga/effects";
import { projectService } from "../../services/Project/services_project";
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
} from '../actionType/project';

// project list
export function* projectList(payload) {
    const token = payload.project.token;
    const page = payload.project.page;
    const search = payload.project.search;
    try {
        const response = yield projectService.project(token, search, page);
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
    const id = payload.project.project_id;
    const tab_include = payload.project.tab_include;
    try {
        const response = yield projectService.projectDetail(token, id, tab_include);
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
        const response = yield(projectService.projectEdit(token, id, name, code));
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
        const response = yield projectService.projectAdd(token, name, code);
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

// sell open list
export function* sellopenList(payload) {
    const token = payload.SellOpen.token;
    const id = payload.SellOpen.project_id;
    try {
        const response = yield projectService.sellopenList(token, id);
        response.success ? yield put({ type: SELLOPEN_LIST_SUCCESS, response }) : yield put({ type: SELLOPEN_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: SELLOPEN_LIST_FAILURE, err });
    }
}
export function* sellopenListWatcher() {
    yield takeLatest(SELLOPEN_LIST_REQUEST, sellopenList);
}

// sell open list
export function* bankingList(payload) {
    const token = payload.banking.token;
    const id = payload.banking.project_id;
    try {
        const response = yield projectService.bankingList(token, id);
        response.success ? yield put({ type: BANKING_LIST_SUCCESS, response }) : yield put({ type: BANKING_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: BANKING_LIST_FAILURE, err });
    }
}
export function* bankingListWatcher() {
    yield takeLatest(BANKING_LIST_REQUEST, bankingList);
}