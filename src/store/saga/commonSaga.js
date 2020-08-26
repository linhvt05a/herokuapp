// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { commonService } from "../../services/index";
import { commonAction } from '../action/index';

// Get list Province
export function* provinceList(payload) {
    let { token, lang } = payload.params
    try {
        const response = yield commonService.provinceList(token, lang);
        response.success ? yield put({ type: commonAction.PROVINCE_LIST_SUCCESS, response }) : yield put({ type: commonAction.PROVINCE_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: commonAction.PROVINCE_LIST_FAILURE, err });
    }
}
export function* provinceListlWatcher() {
    yield takeLatest(commonAction.PROVINCE_LIST_REQUEST, provinceList);
}

// Get list District
export function* districtList(payload) {
    let { token, province_id } = payload.params
    try {
        const response = yield commonService.districtList(token, province_id);
        response.success ? yield put({ type: commonAction.DISTRICT_LIST_SUCCESS, response }) : yield put({ type: commonAction.DISTRICT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: commonAction.DISTRICT_LIST_FAILURE, err });
    }
}
export function* districtListlWatcher() {
    yield takeLatest(commonAction.DISTRICT_LIST_REQUEST, districtList);
}

// Get list Status
export function* statusList(payload) {
    let { token } = payload.params
    try {
        const response = yield commonService.statusList(token);
        response.success ? yield put({ type: commonAction.STATUS_LIST_SUCCESS, response }) : yield put({ type: commonAction.STATUS_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: commonAction.STATUS_LIST_FAILURE, err });
    }
}
export function* statusListlWatcher() {
    yield takeLatest(commonAction.STATUS_LIST_REQUEST, statusList);
}

// Get list Status
export function* minmaxList(payload) {
    let { token } = payload.params
    try {
        const response = yield commonService.minmaxList(token);
        response.success ? yield put({ type: commonAction.MINMAX_LIST_SUCCESS, response }) : yield put({ type: commonAction.MINMAX_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: commonAction.MINMAX_LIST_FAILURE, err });
    }
}
export function* minmaxListlWatcher() {
    yield takeLatest(commonAction.MINMAX_LIST_REQUEST, minmaxList);
}

// root Saga
export default function* rootSaga() {
    yield all([
        fork(provinceListlWatcher),
        fork(districtListlWatcher),
        fork(statusListlWatcher),
        fork(minmaxListlWatcher)
    ]);
}