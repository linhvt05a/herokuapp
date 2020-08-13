import {
    PROVINCE_LIST_REQUEST,
    PROVINCE_LIST_SUCCESS,
    PROVINCE_LIST_FAILURE,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,
    DISTRICT_LIST_FAILURE,
    WARD_LIST_REQUEST,
    WARD_LIST_SUCCESS,
    WARD_LIST_FAILURE,
} from '../actionType/location';

export const provinceListRequest = (payload) => ({
    type: PROVINCE_LIST_REQUEST,
    payload,
});
export const provinceListSuccess = (payload) => ({
    type: PROVINCE_LIST_SUCCESS,
    payload,
});
export const provinceListFailure = (payload) => ({
    type: PROVINCE_LIST_FAILURE,
    payload,
});

export const districtListRequest = (payload) => ({
    type: DISTRICT_LIST_REQUEST,
    payload,
});
export const districtListSuccess = (payload) => ({
    type: DISTRICT_LIST_SUCCESS,
    payload,
});
export const districtListFailure = (payload) => ({
    type: DISTRICT_LIST_FAILURE,
    payload,
});

export const wardListRequest = (payload) => ({
    type: WARD_LIST_REQUEST,
    payload,
});
export const wardListSuccess = (payload) => ({
    type: WARD_LIST_SUCCESS,
    payload,
});
export const wardListFailure = (payload) => ({
    type: WARD_LIST_FAILURE,
    payload,
});