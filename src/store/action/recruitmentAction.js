
const actions = {
    RECRUITMENT_LIST_REQUEST: 'RECRUITMENT_LIST_REQUEST',
    RECRUITMENT_LIST_FAILURE: 'RECRUITMENT_LIST_FAILURE',
    RECRUITMENT_LIST_SUCCESS: 'RECRUITMENT_LIST_SUCCESS',

    recruitmentList: (params) => ({
        type: actions.RECRUITMENT_LIST_REQUEST,
        params: params
    }),
}
export default actions