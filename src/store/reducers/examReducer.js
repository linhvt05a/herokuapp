import * as examActionType from './../../constants/loadList';

const initialState = {
    List: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case examActionType.LOAD_LIST_SUCCESS:
            return {
                ...state,
                List: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}