const promotionList = 'PROMOTION_LIST';
const actions = {

    PROMOTION_LIST_REQUEST: promotionList + '_REQUEST',
    PROMOTION_LIST_FAILURE: promotionList + '_FAILURE',
    PROMOTION_LIST_SUCCESS: promotionList + '_SUCCESS',

    loadPromotionList: (params) => ({
        type: actions.PROMOTION_LIST_REQUEST,
        params: params
    }),

};
export default actions;