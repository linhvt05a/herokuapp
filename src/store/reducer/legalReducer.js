import { legalAction } from "../action";

const initialState = {
  legalFormSupport: [],
  legalFilter:[],
  legalSearch:[],
  legalCategories: {success : true, detail:
    [{category_id:1, category_name:'Transaction rules'},{category_id:2, category_name:'Sale contract'},{category_id:3, category_name:'Other'}]
  },
  legalList: {
    success: true,
    detail: [
      {
        id: 1,
        title: "Terms and conditions and transaction",
      },
      {
        id: 2,
        title: "Disclaimer",
      },
      {
        id: 3,
        title: " Other rules of the transaction",
      },
      
    ],
    total_page: 20,
    total_record: 40,
    page: 1,
  },
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

      case legalAction.LEGAL_FILTER_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        legalFilter: action.response,
        isFetching: true,
        isLoadingList: false,
      };

      case legalAction.LEGAL_SEARCH_BY_KEY_SUCCESS:
        return {
          ...state,
          legalSearch: action.response,
          isFetching: true,
          isLoadingList: false,
        };
    default:
      return state;
  }
};
