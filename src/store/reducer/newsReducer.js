import {newsAction } from '../action';

const initialState = {
  newsList :[]

}
export default (state = initialState, action) => {
    switch (action.type) {
        case newsAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                newsList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}