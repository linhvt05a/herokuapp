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
    STATUS_LIST_FAILURE,

    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE,

    DATA_TOTAL_REQUEST,
    DATA_TOTAL_SUCCESS,
    DATA_TOTAL_FAILURE
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

// project list
export function* projectList(payload) {
    const token = payload.payload.token;
    const search_name = payload.payload.search_name;
    const search_alphabet = payload.payload.search_alphabet;
    const setting_type = payload.payload.setting_type;
    const distribution_type_id = payload.payload.distribution_type_id; 
    const project_id = payload.payload.project_id;
    const status_id = payload.payload.status_id;
    const province_id = payload.payload.province_id;
    const region_id = payload.payload.region_id;
    const distribution_name = payload.payload.distribution_name; 
    const open_sale_id = payload.payload.open_sale_id;
    const is_full_project = payload.payload.is_full_project;
    const has_map_style = payload.payload.has_map_style;
    try {
        const response = yield dashboardService.getProjectList(token, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, region_id, distribution_name, open_sale_id, is_full_project, has_map_style);
        response.success ? yield put({ type: PROJECT_LIST_SUCCESS, response }) : yield put({ type: PROJECT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PROJECT_LIST_FAILURE, err });
    }
}
export function* projectListWatcher() {
    yield takeLatest(PROJECT_LIST_REQUEST, projectList);
}

// data total
export function* dataTotal(payload) {
    const token = payload.payload.token;
    const search_name = payload.payload.search_name;
    const search_alphabet = payload.payload.search_alphabet;
    const setting_type = payload.payload.setting_type;
    const distribution_type_id = payload.payload.distribution_type_id; 
    const project_id = payload.payload.project_id;
    const status_id = payload.payload.status_id;
    const province_id = payload.payload.province_id;
    const region_id = payload.payload.region_id;
    const distribution_name = payload.payload.distribution_name; 
    const open_sale_id = payload.payload.open_sale_id;
    const is_full_project = payload.payload.is_full_project;
    const has_map_style = payload.payload.has_map_style;
    try {
        const response = yield dashboardService.getDataTotal(token, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, region_id, distribution_name, open_sale_id, is_full_project, has_map_style);
        response.success ? yield put({ type: DATA_TOTAL_SUCCESS, response }) : yield put({ type: DATA_TOTAL_FAILURE, response });
    } catch (err) {
        yield put({ type: DATA_TOTAL_FAILURE, err });
    }
}
export function* dataTotalWatcher() {
    yield takeLatest(DATA_TOTAL_REQUEST, dataTotal);
}