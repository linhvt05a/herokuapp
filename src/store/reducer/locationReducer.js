import { actionsLocation } from "../action"

const initialState = {
    provinceList: [],
    districtList: [],
    wardList: [],

    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionsLocation.PROVINCE_LIST_SUCCESS:
            return { ...state, isFetching: false, provinceList: action.response };
        case actionsLocation.PROVINCE_LIST_REQUEST:
            return { ...state, isFetching: false, provinceList: { success: false, error: action.error } };

        case actionsLocation.DISTRICT_LIST_SUCCESS:
            return { ...state, isFetching: false, districtList: action.response };
        case actionsLocation.DISTRICT_LIST_REQUEST:
            return { ...state, isFetching: false, districtList: { success: false, error: action.error } };

        case actionsLocation.WARD_LIST_SUCCESS:
            return { ...state, isFetching: false, wardList: action.response };
        case actionsLocation.WARD_LIST_FAILURE:
            return { ...state, isFetching: false, wardList: { success: false, error: action.error } };

        default:
            return state;
    }
}