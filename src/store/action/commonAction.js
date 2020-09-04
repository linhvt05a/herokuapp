const provinceList = 'PROVINCE_LIST';
const districtList = 'DISTRICT_LIST';
const wardList = 'WARD_LIST';
const statusList = 'STATUS_LIST';
const minmaxList = 'MINMAX_LIST';

const actions = {

    PROVINCE_LIST_REQUEST: provinceList + '_REQUEST',
    PROVINCE_LIST_FAILURE: provinceList + '_FAILURE',
    PROVINCE_LIST_SUCCESS: provinceList + '_SUCCESS',

    DISTRICT_LIST_REQUEST: districtList + '_REQUEST',
    DISTRICT_LIST_FAILURE: districtList + '_FAILURE',
    DISTRICT_LIST_SUCCESS: districtList + '_SUCCESS',

    WARD_LIST_REQUEST: wardList + '_REQUEST',
    WARD_LIST_FAILURE: wardList + '_FAILURE',
    WARD_LIST_SUCCESS: wardList + '_SUCCESS',

    STATUS_LIST_REQUEST: statusList + '_REQUEST',
    STATUS_LIST_FAILURE: statusList + '_FAILURE',
    STATUS_LIST_SUCCESS: statusList + '_SUCCESS',

    MINMAX_LIST_REQUEST: minmaxList + '_REQUEST',
    MINMAX_LIST_FAILURE: minmaxList + '_FAILURE',
    MINMAX_LIST_SUCCESS: minmaxList + '_SUCCESS',

    loadProvinceList: (params) => ({
        type: actions.PROVINCE_LIST_REQUEST,
        params: params
    }),

    loadDistrictList: (params) => ({
        type: actions.DISTRICT_LIST_REQUEST,
        params: params
    }),

    loadWardList: (params) => ({
        type: actions.WARD_LIST_REQUEST,
        params: params
    }),

    loadStatusList: (params) => ({
        type: actions.STATUS_LIST_REQUEST,
        params: params
    }),

    loadMinMaxList: (params) => ({
        type: actions.MINMAX_LIST_REQUEST,
        params: params
    }),

};
export default actions;