import actions from '../action/shipping';

const initialState = {
    List: [],
    Detail: [],
    page: 0,
    total_page: 0,
    total_record: 0,
    isFetching: false,
    error: [],
    success: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.LOAD_DETAIL_SUCCESS:
            return {
                ...state,
                Detail: action.response.detail,
                isFetching: true,
                success: action.response.success

            }
        case actions.LOAD_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            };
        case actions.LOAD_LIST_SUCCESS:
            return {
                ...state,
                List: action.response.detail,
                isFetching: true,
                page: action.response.page,
                total_page: action.response.total_page,
                total_record: action.response.total_record,
                success: action.response.success
            }
        default:
            return state;
    }
}