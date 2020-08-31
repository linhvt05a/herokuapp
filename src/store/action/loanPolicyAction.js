const loanList = 'LOAN_POLICY';
const actions = {

    LOAN_POLICY_LIST_REQUEST: loanList + '_REQUEST',
    LOAN_POLICY_LIST_FAILURE: loanList + '_FAILURE',
    LOAN_POLICY_LIST_SUCCESS: loanList + '_SUCCESS',

    loanPolicyList: (params) => ({
        type: actions.LOAN_POLICY_LIST_REQUEST,
        params: params
    }),

};
export default actions;