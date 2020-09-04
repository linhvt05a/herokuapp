import { visitorAction } from '../action';

const initialState = {
    visitorForm: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case visitorAction.VISITOR_SUCCESS:
            return {
                ...state,
                visitorForm: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}