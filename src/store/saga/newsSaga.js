import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsAction } from '../action';


export function* newsList(payload) {
    console.log(payload)
    try {
        const response = yield newsService.newsList(payload);
        response.success ? yield put({ type: newsAction.NEWS_LIST_SUCCESS, response }) : yield put({ type: newsAction.NEWS_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_LIST_FAILURE, err });
    }
}

export function* newsDetail(payload) {
    try {
        const response = yield newsService.newsDetail(payload);
        response.success ? yield put({ type: newsAction.NEWS_DETAIL_LIST_SUCCESS, response }) : yield put({ type: newsAction.NEWS_DETAIL_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_DETAIL_LIST_FAILURE, err });
    }
}

export function* newsCategoriesList(payload) {
    try {
        const response = yield newsService.newsCategories(payload);
        response.success ? yield put({ type: newsAction.NEWS_CATEGORIES_SUCCESS, response }) : yield put({ type: newsAction.NEWS_CATEGORIES_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_CATEGORIES_FAILURE, err });
    }
}

export function* newsHotList(payload) {
    try {
        const response = yield newsService.newsHotList(payload);
        response.success ? yield put({ type: newsAction.NEWS_HOT_LIST_SUCCESS, response }) : yield put({ type: newsAction.NEWS_HOT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_HOT_LIST_FAILURE, err });
    }
}

export function* newsCommentAdd(payload) {
    try {
        const response = yield newsService.newsCommentAdd(payload);
        response.success ? yield put({ type: newsAction.NEWS_COMMENT_ADD_SUCCESS, response }) : yield put({ type: newsAction.NEWS_COMMENT_ADD_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_COMMENT_ADD_FAILURE, err });
    }
}

export function* newsCommentList(payload) {
    try {
        const response = yield newsService.newsCommentList(payload);
        response.success ? yield put({ type: newsAction.NEWS_COMMENT_LIST_SUCCESS, response }) : yield put({ type: newsAction.NEWS_COMMENT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsAction.NEWS_COMMENT_LIST_FAILURE, err });
    }
}


export function* newsCommentAddWatcher() {
    yield takeLatest(newsAction.NEWS_COMMENT_ADD_REQUEST, newsCommentAdd);
}
export function* newsCommentListWatcher() {
    yield takeLatest(newsAction.NEWS_COMMENT_LIST_REQUEST, newsCommentList);
}
export function* newsHotListWatcher() {
    yield takeLatest(newsAction.NEWS_HOT_LIST_REQUEST, newsHotList);
}

export function* newsDetailWatcher() {
    yield takeLatest(newsAction.NEWS_DETAIL_LIST_REQUEST, newsDetail);
}
export function* newsListWatcher() {
    yield takeLatest(newsAction.NEWS_LIST_REQUEST, newsList);
}

export function* newsCategoriesWatcher() {
    yield takeLatest(newsAction.NEWS_CATEGORIES_REQUEST, newsCategoriesList);
}

export default function* rootSaga() {
    yield all([
        fork(newsListWatcher),
        fork(newsCategoriesWatcher),
        fork(newsDetailWatcher),
        fork(newsHotListWatcher),
        fork(newsCommentAddWatcher),
        fork(newsCommentListWatcher),
    ]);
}