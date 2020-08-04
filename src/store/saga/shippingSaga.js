import { put, takeLatest } from "redux-saga/effects";
import { sysShippingService } from "../../services";
import actions from '../action/shipping';

export function* shoppingDetail(payload) {
    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysShippingService.detail(token, id);
        response.success ? yield put({ type: actions.LOAD_DETAIL_SUCCESS, response }) : yield put({ type: actions.LOAD_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_DETAIL_FAILURE, err });
    }
}
export function* shippingDetailWatcher() {
    yield takeLatest(actions.LOAD_DETAIL, shoppingDetail);
}

export function* shoppingList(payload) {

    const token = payload.params.token;
    try {
        const response = yield sysShippingService.list(token);
        response.success ? yield put({ type: actions.LOAD_LIST_SUCCESS, response }) : yield put({ type: actions.LOAD_LIST_SUCCESS, response });
    } catch (err) {
        yield put({ type: actions.LOAD_LIST_SUCCESS, err });
    }
}
export function* shippingListlWatcher() {
    yield takeLatest(actions.LOAD_LIST, shoppingList);
}