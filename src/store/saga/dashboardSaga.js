import { put, takeLatest } from "redux-saga/effects";
import { dashboardService } from "../../services/Dashboard/services_dashboard";
import {
    REGION_LIST_REQUEST,
    REGION_LIST_SUCCESS,
    REGION_LIST_FAILURE,

    PROVINCE_LIST_REQUEST,
    PROVINCE_LIST_SUCCESS,
    PROVINCE_LIST_FAILURE,

    TYPE_LIST_REQUEST,
    TYPE_LIST_SUCCESS,
    TYPE_LIST_FAILURE,

    STATUS_LIST_REQUEST,
    STATUS_LIST_SUCCESS,
    STATUS_LIST_FAILURE
} from '../actionType/dashboard';

// region list
export function* regionList(payload) {
    const token = payload.payload.token;
    try {
        const response = yield dashboardService.getRegionList(token);
        response.success ? yield put({ type: REGION_LIST_SUCCESS, response }) : yield put({ type: REGION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: REGION_LIST_FAILURE, err });
    }
}
export function* regionListWatcher() {
    yield takeLatest(REGION_LIST_REQUEST, regionList);
}

// province list
export function* provinceList(payload) {
    const token = payload.payload.token;
    const region_id = payload.payload.regionId;
    const search_name = payload.payload.search_name;
    const has_project = payload.payload.has_project;
    const limit = payload.payload.limit; 
    const lang = payload.payload.lang;
    try {
        const response = yield dashboardService.getProvinceList(token, region_id, search_name, has_project, limit, lang);
        response.success ? yield put({ type: PROVINCE_LIST_SUCCESS, response }) : yield put({ type: PROVINCE_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PROVINCE_LIST_FAILURE, err });
    }
}
export function* provinceListWatcher() {
    yield takeLatest(PROVINCE_LIST_REQUEST, provinceList);
}

// type list
export function* typeList(payload) {
    const token = payload.payload.token;
    try {
        const response = yield dashboardService.getTypeList(token);
        response.success ? yield put({ type: TYPE_LIST_SUCCESS, response }) : yield put({ type: TYPE_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: TYPE_LIST_FAILURE, err });
    }
}
export function* typeListWatcher() {
    yield takeLatest(TYPE_LIST_REQUEST, typeList);
}

// status list
export function* statusList(payload) {
    const token = payload.payload.token;
    try {
        const response = yield dashboardService.getStatusList(token);
        response.success ? yield put({ type: STATUS_LIST_SUCCESS, response }) : yield put({ type: STATUS_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: STATUS_LIST_FAILURE, err });
    }
}
export function* statusListWatcher() {
    yield takeLatest(STATUS_LIST_REQUEST, statusList);
}