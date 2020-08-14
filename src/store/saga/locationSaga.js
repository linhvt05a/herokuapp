import { put, takeLatest, all, fork } from "redux-saga/effects";
import { locationService } from '../../services/location/services_location';
import { actionsLocation } from "../action"

export function* ProvinceList(payload) {
    let { token } = payload.params;
    try {
        const response = yield locationService.getProvince(token);
        response.success ? yield put({ type: actionsLocation.PROVINCE_LIST_SUCCESS, response }) : yield put({ type: actionsLocation.PROVINCE_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actionsLocation.PROVINCE_LIST_FAILURE, err });
    }
}
function* provinceListWatcher() {
    yield takeLatest(actionsLocation.PROVINCE_LIST_REQUEST, ProvinceList);
}

export function* DistrictList(payload) {
    let { token, province_id } = payload.params;
    console.log(payload);
    try {
        const response = yield locationService.getDistrict(token, province_id);
        response.success ? yield put({ type: actionsLocation.DISTRICT_LIST_SUCCESS, response }) : yield put({ type: actionsLocation.DISTRICT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actionsLocation.DISTRICT_LIST_FAILURE, err });
    }
}
function* districtListWatcher() {
    yield takeLatest(actionsLocation.DISTRICT_LIST_REQUEST, DistrictList);
}

export function* wardList(payload) {
    let { token, district_id } = payload.params;
    try {
        const response = yield locationService.getWard(token, district_id);
        response.success ? yield put({ type: actionsLocation.WARD_LIST_SUCCESS, response }) : yield put({ type: actionsLocation.WARD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actionsLocation.WARD_LIST_FAILURE, err });
    }
}
function* wardListWatcher() {
    yield takeLatest(actionsLocation.WARD_LIST_REQUEST, wardList);
}


export default function* rootSaga() {
    yield all([
        fork(provinceListWatcher),
        fork(districtListWatcher),
        fork(wardListWatcher)
    ]);
}