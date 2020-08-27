import { commonAction } from '../action/index';

const initialState = {
    provinceList: [],
    districtList: [],
    statusList: [],
    minmaxList: [],

    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case commonAction.PROVINCE_LIST_SUCCESS:
            return { ...state, isFetching: false, provinceList: action.response };
        case commonAction.PROVINCE_LIST_REQUEST:
            return { ...state, isFetching: false, provinceList: { success: false, error: action.error } };

        case commonAction.DISTRICT_LIST_SUCCESS:
            return { ...state, isFetching: false, districtList: action.response };
        case commonAction.DISTRICT_LIST_REQUEST:
            return { ...state, isFetching: false, districtList: { success: false, error: action.error } };

        case commonAction.STATUS_LIST_SUCCESS:
            return { ...state, isFetching: false, statusList: action.response };
        case commonAction.STATUS_LIST_REQUEST:
            return { ...state, isFetching: false, statusList: { success: false, error: action.error } };

        case commonAction.STATUS_LIST_SUCCESS:
            return { ...state, isFetching: false, minmaxList: action.response };
        case commonAction.STATUS_LIST_REQUEST:
            return { ...state, isFetching: false, minmaxList: { success: false, error: action.error } };

        default:
            return state;
    }
}