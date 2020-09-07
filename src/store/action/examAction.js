const name = 'CART_';
const actions = {

    LOAD_LIST: name + 'LIST_REQUEST',
    LOAD_LIST_FAILURE: name + 'LIST_FAILURE',
    LOAD_LIST_SUCCESS: name + 'LIST_SUCCESS',
    LOAD_CHAT: "LOAD_CHAT",

    LoadList: (params) => ({
        type: actions.LOAD_LIST,
        params: params
    }),
    loadChat: (params) => ({
        type: actions.LOAD_CHAT,
        params
    })

};
export default actions;