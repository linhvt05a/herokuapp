// import {
//     PROVINCE_LIST_REQUEST,
//     PROVINCE_LIST_SUCCESS,
//     PROVINCE_LIST_FAILURE,
//     DISTRICT_LIST_REQUEST,
//     DISTRICT_LIST_SUCCESS,
//     DISTRICT_LIST_FAILURE,
//     WARD_LIST_REQUEST,
//     WARD_LIST_SUCCESS,
//     WARD_LIST_FAILURE,
// } from '../actionType/location';

// export const provinceListRequest = (payload) => ({
//     type: PROVINCE_LIST_REQUEST,
//     payload,
// });
// export const provinceListSuccess = (payload) => ({
//     type: PROVINCE_LIST_SUCCESS,
//     payload,
// });
// export const provinceListFailure = (payload) => ({
//     type: PROVINCE_LIST_FAILURE,
//     payload,
// });

// export const districtListRequest = (payload) => ({
//     type: DISTRICT_LIST_REQUEST,
//     payload,
// });
// export const districtListSuccess = (payload) => ({
//     type: DISTRICT_LIST_SUCCESS,
//     payload,
// });
// export const districtListFailure = (payload) => ({
//     type: DISTRICT_LIST_FAILURE,
//     payload,
// });

// export const wardListRequest = (payload) => ({
//     type: WARD_LIST_REQUEST,
//     payload,
// });
// export const wardListSuccess = (payload) => ({
//     type: WARD_LIST_SUCCESS,
//     payload,
// });
// export const wardListFailure = (payload) => ({
//     type: WARD_LIST_FAILURE,
//     payload,
// });


const name = 'LOCATION_';
const actions = {

    PROVINCE_LIST_REQUEST: name + 'PROVINCE_LIST_REQUEST',
    PROVINCE_LIST_FAILURE: name + 'PROVINCE_LIST_FAILURE',
    PROVINCE_LIST_SUCCESS: name + 'PROVINCE_LIST_SUCCESS',
    //create
    DISTRICT_LIST_REQUEST: name + 'DISTRICT_LIST_REQUEST',
    DISTRICT_LIST_FAILURE: name + 'DISTRICT_LIST_FAILURE',
    DISTRICT_LIST_SUCCESS: name + 'DISTRICT_LIST_SUCCESS',

    //accounting
    WARD_LIST_REQUEST: name + 'WARD_LIST_REQUEST',
    WARD_LIST_FAILURE: name + 'WARD_LIST_FAILURE',
    WARD_LIST_SUCCESS: name + 'WARD_LIST_SUCCESS',



    requestProvinceList: (params) => ({
        type: actions.PROVINCE_LIST_REQUEST,
        params
    }),
    requestDistrictList: (params) => ({
        type: actions.DISTRICT_LIST_REQUEST,
        params
    }),
    requestWardList: (params) => ({
        type: actions.WARD_LIST_REQUEST,
        params
    }),

};
export default actions;
