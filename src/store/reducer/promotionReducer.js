import { promotionAction } from '../action';

const initialState = {
    promotionList: {
        "success": true, "detail": [
        {
            id: 1, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        },
        {
            id: 2, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        },
        {
            id: 3, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        },
        {
            id: 4, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        },
        {
            id: 5, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        },
        {
            id: 6, 
            name:'Get a free Casio watch pair when buying Royal Garden products',
            des : 'Get a 30% discount voucher of electronic and refrigeration products from different brands when buying Thao Dien villa',
            timeFrom: '25/06/2020',
            timeTo:'28/06/2020',
            image:'../../../images/hotnews_1.jpg'
        }
    ],
    "total_page":20,
    "total_record": 40,
    "page":1
},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case promotionAction.PROMOTION_LIST_SUCCESS:
            return {
                ...state,
                promotionList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}