const modalVisit = 'MODAL_VISIT_REGISTER';

const actions = {
    MODAL_VISIT_REGISTER_REQUEST: modalVisit + 'REQUEST',
    MODAL_VISIT_REGISTER_FAILURE: modalVisit + 'FAILURE',
    MODAL_VISIT_REGISTER_SUCCESS: modalVisit + 'SUCCESS',

    LoadRegister: (params) => ({
        type: actions.MODAL_VISIT_REGISTER_REQUEST,
        params: params
    }),

};
export default actions;