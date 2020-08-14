import { put, takeLatest } from "redux-saga/effects";
import { sysCartService } from "../../services";
import actions from '../action/cart';

export function* cartDetail(payload) {
    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysCartService.detail(token, id);
        response.success ? yield put({ type: actions.LOAD_DETAIL_SUCCESS, response }) : yield put({ type: actions.LOAD_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_DETAIL_FAILURE, err });
    }
}
export function* cartDetailWatcher() {
    yield takeLatest(actions.LOAD_DETAIL, cartDetail);
}

export function* cartList(payload) {
    let { token, search_name, status_id, setting_type } = payload.params
    try {
        const response = yield sysCartService.list(token, search_name, status_id, setting_type);
        response.success ? yield put({ type: actions.LOAD_LIST_SUCCESS, response }) : yield put({ type: actions.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_LIST_FAILURE, err });
    }
}
export function* cartListlWatcher() {
    yield takeLatest(actions.LOAD_LIST, cartList);
}

export function* cartSellOpen(payload) {

    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysCartService.sellopen(token, id);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_FAILURE, err });
    }
}
export function* cartSellOpenlWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN, cartSellOpen);
}

export function* cartSellOpenList(payload) {
    let { token, id, area_id, sell_open_id } = payload.params

    try {
        const response = yield sysCartService.sellopenList(token, id, area_id, sell_open_id); console.log(response);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_LIST_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_LIST_FAILURE, err });
    }
}
export function* cartSellOpenListlWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN_LIST, cartSellOpenList);
}

export function* cartSellOpenCart(payload) {
    let { token, id, sell_open_id, block_id, floor_or_lot_id } = payload.params;
    try {
        const response = yield sysCartService.cart(token, id, sell_open_id, block_id, floor_or_lot_id);
        response.success ? yield put({ type: actions.LOAD_SELL_OPEN_CART_SUCCESS, response }) : yield put({ type: actions.LOAD_SELL_OPEN_CART_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_SELL_OPEN_CART_FAILURE, err });
    }
}
export function* cartSellOpenCartWatcher() {
    yield takeLatest(actions.LOAD_SELL_OPEN_CART, cartSellOpenCart);
}


///filter
export function* FilterArea(payload) {
    let { token, id, sell_open_id } = payload.params

    try {
        const response = yield sysCartService.filterArea(token, id, sell_open_id);
        response.success ? yield put({ type: actions.LOAD_FILTER_AREA_SUCCESS, response }) : yield put({ type: actions.LOAD_FILTER_AREA_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_FILTER_AREA_FAILURE, err });
    }
}
export function* filterAreaWatcher() {
    yield takeLatest(actions.LOAD_FILTER_AREA, FilterArea);
}

export function* FilterBlock(payload) {
    let { token, id, sell_open_id } = payload.params;

    try {
        const response = yield sysCartService.filterBlock(token, id, sell_open_id);
        response.success ? yield put({ type: actions.LOAD_FILTER_BLOCK_SUCCESS, response }) : yield put({ type: actions.LOAD_FILTER_BLOCK_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_FILTER_BLOCK_FAILURE, err });
    }
}
export function* filterBlockWatcher() {
    yield takeLatest(actions.LOAD_FILTER_BLOCK, FilterBlock);
}

export function* FilterFloor(payload) {
    let { token, id, sell_open_id } = payload.params;
    try {
        const response = yield sysCartService.filterFloor(token, id, sell_open_id);
        response.success ? yield put({ type: actions.LOAD_FILTER_FLOOR_SUCCESS, response }) : yield put({ type: actions.LOAD_FILTER_FLOOR_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_FILTER_FLOOR_FAILURE, err });
    }
}
export function* filterFloorWatcher() {
    yield takeLatest(actions.LOAD_FILTER_FLOOR, FilterFloor);
}

export function* FilterProjectStatus(payload) {
    const token = payload.params.token;
    try {
        const response = yield sysCartService.filterProjectStatus(token);
        response.success ? yield put({ type: actions.LOAD_FILTER_PROJECT_STATUS_SUCCESS, response }) : yield put({ type: actions.LOAD_FILTER_PROJECT_STATUS_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_FILTER_PROJECT_STATUS_FAILURE, err });
    }
}
export function* filterProjectStatusWatcher() {
    yield takeLatest(actions.LOAD_FILTER_PROJECT_STATUS, FilterProjectStatus);
}

export function* FilterListOpenSale(payload) {
    const token = payload.params.token;
    const id = payload.params.id;
    try {
        const response = yield sysCartService.filterListOpenSale(token, id); console.log("2", response);
        response.success ? yield put({ type: actions.LOAD_FILTER_LIST_OPEN_SALE_SUCCESS, response }) : yield put({ type: actions.LOAD_FILTER_LIST_OPEN_SALE_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.LOAD_FILTER_LIST_OPEN_SALE_FAILURE, err });
    }
}
export function* filterListOpenSaleWatcher() {
    yield takeLatest(actions.LOAD_FILTER_LIST_OPEN_SALE, FilterListOpenSale);
}