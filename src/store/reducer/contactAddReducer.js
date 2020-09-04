<<<<<<< HEAD:src/store/reducer/contactReducer.js
import { contactAddAction } from '../action';

const initialState = {
    contactAdd: [],
    advisoryAdd: [],
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case contactAddAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                contactAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };

        case contactAddAction.ADVISORY_SUCCESS:
            return { ...state, isFetching: false, advisoryAdd: action.response };
        case contactAddAction.ADVISORY_REQUEST:
            return { ...state, isFetching: false, advisoryAdd: { success: false, error: action.error } };
        default:
            return state;
    }
}
=======
import { contactAddAction } from '../action';

const initialState = {
    contactAdd: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case contactAddAction.CONTACT_ADD_REQUEST:
            return {
                ...state,
                contactAdd: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}
>>>>>>> develop:src/store/reducer/contactAddReducer.js