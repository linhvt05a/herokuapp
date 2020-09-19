// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { transactionService, productService } from "../../services/index";
import { transactionAction, productAction } from '../action/index';


export function* transactionList(payload) {
    let { token, project_id, area_id, block_id, acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id } = payload.params
    try {
        const response = yield transactionService.list(token, project_id, area_id, block_id, acreage_from, acreage_to, price_from, price_to, direction_id, architecture_type_id);
        response.success ? yield put({ type: transactionAction.TRANSACTION_LIST_SUCCESS, response }) : yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, err });
    }
}

export function* transProductTypeList(payload) {
    let { token } = payload.params

    try {
        const response = yield transactionService.getProductTypeList(token);
        response.success ? yield put({ type: transactionAction.TRANS_PRODUCT_TYPE_SUCCESS, response }) : yield put({ type: transactionAction.TRANS_PRODUCT_TYPE_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANS_PRODUCT_TYPE_FAILURE, err });
    }
}

export function* transProjectNameList(payload) {
    let { token, project_id } = payload.params

    try {
        const response = yield transactionService.getProjectNameList(token, project_id);
        response.success ? yield put({ type: transactionAction.TRANS_PROJECT_NAME_SUCCESS, response }) : yield put({ type: transactionAction.TRANS_PROJECT_NAME_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANS_PROJECT_NAME_FAILURE, err });
    }
}

export function* transAreaNameList(payload) {
    let { token, project_id } = payload.params

    try {
        const response = yield transactionService.getAreaNameList(token, project_id);
        response.success ? yield put({ type: transactionAction.TRANS_AREA_NAME_SUCCESS, response }) : yield put({ type: transactionAction.TRANS_AREA_NAME_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANS_AREA_NAME_FAILURE, err });
    }
}

export function* transBlockNameList(payload) {
    let { token, project_id } = payload.params

    try {
        const response = yield transactionService.getBlockNameList(token, project_id);
        response.success ? yield put({ type: transactionAction.TRANS_BLOCK_NAME_SUCCESS, response }) : yield put({ type: transactionAction.TRANS_BLOCK_NAME_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANS_BLOCK_NAME_FAILURE, err });
    }
}


export function* getProjectList(payload) {
    let { token, is_full_project } = payload.params

    try {
        const response = yield transactionService.getProjectList(token, is_full_project);
        response.success ? yield put({ type: transactionAction.PROJECT_LIST_SUCCESS, response }) : yield put({ type: transactionAction.PROJECT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.PROJECT_LIST_FAILURE, err });
    }
}

export function* getProjectType(payload) {
    let { token } = payload.params
    try {
        const response = yield transactionService.getProjectType(token);
        response.success ? yield put({ type: transactionAction.PROJECT_TYPE_SUCCESS, response }) : yield put({ type: transactionAction.PROJECT_TYPE_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.PROJECT_TYPE_FAILURE, err });
    }
}

export function* transListlWatcher() {
    yield takeLatest(transactionAction.TRANSACTION_LIST_REQUEST, transactionList);
}

export function* transacProductTypeListWatcher() {
    yield takeLatest(transactionAction.TRANS_PRODUCT_TYPE_REQUEST, transProductTypeList);
}

export function* transacProjectNameListWatcher() {
    yield takeLatest(transactionAction.TRANS_PROJECT_NAME_REQUEST, transProjectNameList);
}

export function* transacAreaNameListWatcher() {
    yield takeLatest(transactionAction.TRANS_AREA_NAME_REQUEST, transAreaNameList);
}

export function* transacBlockNameListWatcher() {
    yield takeLatest(transactionAction.TRANS_BLOCK_NAME_REQUEST, transBlockNameList);
}

export function* getProjectListWatcher() {
    yield takeLatest(transactionAction.PROJECT_LIST_REQUEST, getProjectList);
}
export function* getProjectTypeWatcher() {
    yield takeLatest(transactionAction.PROJECT_TYPE_REQUEST, getProjectType);
}

export default function* rootSaga() {
    yield all([
        fork(transListlWatcher),
        fork(transacProductTypeListWatcher),
        fork(transacProjectNameListWatcher),
        fork(transacAreaNameListWatcher),
        fork(transacBlockNameListWatcher),
        fork(getProjectListWatcher),
        fork(getProjectTypeWatcher),
    ]);
}