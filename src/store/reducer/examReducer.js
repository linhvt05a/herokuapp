import { examAction } from '../action';

const initialState = {
    List: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case examAction.LOAD_LIST_SUCCESS:
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