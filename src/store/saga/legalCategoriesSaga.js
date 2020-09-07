import { put, takeLatest, all, fork } from "redux-saga/effects";
import { juridicalService } from "../../services";
import { legalCategoriesAction } from '../action';


export function* legalCates(payload) {
    try {
        const response = yield juridicalService.legalCates(payload);
        response.success ? yield put({ type: legalCategoriesAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: legalCategoriesAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: legalCategoriesAction.LOAD_LIST_FAILURE, err });
    }
}


export function* legalCatesWatcher() {
    yield takeLatest(legalCategoriesAction.LOAD_LIST, legalCates);
}

export default function* rootSaga() {
    yield all([
        fork(legalCatesWatcher),
    ]);
}