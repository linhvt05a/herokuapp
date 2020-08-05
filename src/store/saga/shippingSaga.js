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
        console.log("response1", response);
        response.success ? yield put({ type: actions.LOAD_LIST_SUCCESS, response }) : yield put({ type: actions.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_LIST_FAILURE, err });
    }
}
export function* shippingListlWatcher() {
    yield takeLatest(actions.LOAD_LIST, shoppingList);
}

export function* shoppingSellOpen(payload) {

    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysShippingService.sellopen(token, id);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_FAILURE, err });
    }
}
export function* shippingSellOpenlWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN, shoppingSellOpen);
}

export function* shoppingSellOpenList(payload) {

    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysShippingService.sellopenList(token, id);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_LIST_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_LIST_FAILURE, err });
    }
}
export function* shippingSellOpenListlWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN_LIST, shoppingSellOpenList);
}

export function* shoppingSellOpenCart(payload) {

    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysShippingService.cart(token, id);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_CART_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_CART_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_CART_FAILURE, err });
    }
}
export function* shippingSellOpenCartWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN_CART, shoppingSellOpenCart);
}