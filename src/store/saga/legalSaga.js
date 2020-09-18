import { put, takeLatest, all, fork } from "redux-saga/effects";
import { legalService } from "../../services";
import { legalAction } from '../action';


export function* legalList(payload) {
    try {
        const response = yield legalService.legalList(payload)
        response.success ? yield put({ type: legalAction.LEGAL_LIST_SUCCESS, response }) : yield put({ type: legalAction.LEGAL_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: legalAction.LEGAL_LIST_FAILURE, err });
    }
}
export function* legalCategories(payload) {
    try {
        const response = yield legalService.legalCategories(payload)
        response.success ? yield put({ type: legalAction.LEGAL_CATEGORIES_LIST_SUCCESS, response }) : yield put({ type: legalAction.LEGAL_CATEGORIES_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: legalAction.LEGAL_CATEGORIES_LIST_FAILURE, err });
    }
}
export function* legalForm(payload) {
    console.log(payload)
    try {
        const response = yield legalService.legalForm(payload)
        console.log(response)
        response.success ? yield put({ type: legalAction.LEGAL_FORM_SUCCESS, response }) : yield put({ type: legalAction.LEGAL_FORM_FAILURE, response });
    } catch (err) {
        yield put({ type: legalAction.LEGAL_FORM_FAILURE, err });
    }
}

export function* legalFilter(payload) {
    try {
        const response = yield legalService.legalFilter(payload)
        response.success ? yield put({ type: legalAction.LEGAL_FILTER_BY_CATEGORIES_SUCCESS, response }) : yield put({ type: legalAction.LEGAL_FILTER_BY_CATEGORIES_FAILURE, response });
    } catch (err) {
        yield put({ type: legalAction.LEGAL_FILTER_BY_CATEGORIES_FAILURE, err });
    }
}

export function* legalSearch(payload) {
    try {
        const response = yield legalService.legalSearch(payload)
        response.success ? yield put({ type: legalAction.LEGAL_SEARCH_BY_KEY_SUCCESS, response }) : yield put({ type: legalAction.LEGAL_SEARCH_BY_KEY_FAILURE, response });
    } catch (err) {
        yield put({ type: legalAction.LEGAL_SEARCH_BY_KEY_FAILURE, err });
    }
}

export function*legalSearchWatcher() {
    yield takeLatest(legalAction.LEGAL_SEARCH_BY_KEY_REQUEST, legalSearch);
}
export function*legalFilterWatcher() {
    yield takeLatest(legalAction.LEGAL_FILTER_BY_CATEGORIES_REQUEST, legalFilter);
}
export function*legalFormWatcher() {
    yield takeLatest(legalAction.LEGAL_FORM_REQUEST, legalForm);
}
export function*legalCategoriesWatcher() {
    yield takeLatest(legalAction.LEGAL_CATEGORIES_LIST_REQUEST, legalCategories);
}

export function*legalListWatcher() {
    yield takeLatest(legalAction.LEGAL_LIST_REQUEST, legalList);
}

export default function* rootSaga() {
    yield all([
        fork(legalListWatcher),
        fork(legalCategoriesWatcher),
        fork(legalFormWatcher),
        fork(legalFilterWatcher),
        fork(legalSearchWatcher),
    ]);
}