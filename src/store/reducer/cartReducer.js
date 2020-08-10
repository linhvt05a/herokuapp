import actions from '../action/cart';

const initialState = {
    List: [],
    Detail: [],
    Sell_Open: [],
    Sell_Open_Floor: [],
    Sell_Open_Cart: [],
    Filter_Project_Area: [],
    Filter_Floor: [],
    Filter_Block: [],
    Filter_Project_Status: [],
    Filter_Open_Sale: [],
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

            };
        case actions.LOAD_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.response.err,
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
            };
        case actions.LOAD_SELL_OPEN_SUCCESS:
            return {
                ...state,
                Sell_Open: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_SELL_OPEN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.response.err,
                success: false
            }
        case actions.LOAD_SELL_OPEN_LIST_SUCCESS:
            return {
                ...state,
                Sell_Open_Floor: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_SELL_OPEN_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.response.err,
                success: false
            }
        case actions.LOAD_SELL_OPEN_CART_SUCCESS:
            return {
                ...state,
                Sell_Open_Cart: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_SELL_OPEN_CART_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }


        //filter
        case actions.LOAD_FILTER_PROJECT_STATUS_SUCCESS:
            return {
                ...state,
                Filter_Project_Status: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_FILTER_PROJECT_STATUS_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }
        case actions.LOAD_FILTER_AREA_SUCCESS:
            return {
                ...state,
                Filter_Project_Area: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_FILTER_AREA_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }
        case actions.LOAD_FILTER_LIST_OPEN_SALE_SUCCESS:
            return {
                ...state,
                Filter_Open_Sale: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_FILTER_LIST_OPEN_SALE_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }
        case actions.LOAD_FILTER_FLOOR_SUCCESS:
            return {
                ...state,
                Filter_Floor: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_FILTER_FLOOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }
        case actions.LOAD_FILTER_BLOCK_SUCCESS:
            return {
                ...state,
                Filter_Block: action.response.detail,
                isFetching: true,
                success: action.response.success
            };
        case actions.LOAD_FILTER_BLOCK_FAILURE:
            return {
                ...state,
                isFetching: false,
                // error: action.response.err,
                success: false
            }
        default:
            return state;
    }
}