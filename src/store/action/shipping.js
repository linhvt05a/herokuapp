const name = 'SHIPPING_';
const actions = {

    LOAD_LIST: name + 'LOAD_LIST',
    LOAD_LIST_FAILURE: name + 'LOAD_LIST_FAILURE',
    LOAD_LIST_SUCCESS: name + 'LOAD_LIST_SUCCESS',
    //** detail */
    LOAD_DETAIL: name + 'LOAD_DETAIL',
    LOAD_DETAIL_FAILURE: name + 'LOAD_DETAIL_FAILURE',
    LOAD_DETAIL_SUCCESS: name + 'LOAD_DETAIL_SUCCESS',

    LoadList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),
    LoadDetail: (params) => ({
        type: actions.LOAD_DETAIL,
        params: params
    })

};
export default actions;