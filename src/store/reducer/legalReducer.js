import { legalAction } from "../action";

const initialState = {
  legalFormSupport: [],
  legalCategories: [],
  legalList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case legalAction.LEGAL_FORM_SUCCESS:
      return {
        ...state,
        legalFormSupport: action.response,
        isFetching: true,
        isLoadingList: false,
      };
    case legalAction.LEGAL_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        legalCategories: action.response,
        isFetching: true,
        isLoadingList: false,
      };
    case legalAction.LEGAL_LIST_SUCCESS:
      return {
        ...state,
        legalList: action.response,
        isFetching: true,
        isLoadingList: false,
      };
    default:
      return state;
  }
};
