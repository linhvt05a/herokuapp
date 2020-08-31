import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsCategoriesAction } from '../action';


export function* newsCateList(payload) {
    try {
        const response = yield newsService.newsCategories(payload);
        response.success ? yield put({ type: newsCategoriesAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: newsCategoriesAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsCategoriesAction.LOAD_LIST_FAILURE, err });
    }
}


export function* newsCateListWatcher() {
    yield takeLatest(newsCategoriesAction.LOAD_LIST, newsCateList);
}

export default function* rootSaga() {
    yield all([
        fork(newsCateListWatcher),
    ]);
}