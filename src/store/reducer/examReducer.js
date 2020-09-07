import { examAction } from '../action';

const initialState = {
    List: [],
    showChat: false
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
        case examAction.LOAD_CHAT:
            return {
                ...state,
                showChat: !action.params
            }
        default:
            return state;
    }
}