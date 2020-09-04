const actions = {
    VISITOR_REQUEST: 'VISITOR_REQUEST',
    VISITOR_FAILURE: 'VISITOR_FAILURE',
    VISITOR_SUCCESS: 'VISITOR_SUCCESS',

    visitorForm: (params) => ({
        type: actions.VISITOR_REQUEST,
        params: params
    }),

};
export default actions;