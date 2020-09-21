const actions = {
    LIVE_STREAM_LIST_REQUEST: 'LIVE_STREAM_LIST_REQUEST',
    LIVE_STREAM_LIST_FAILURE: 'LIVE_STREAM_LIST_FAILURE',
    LIVE_STREAM_LIST_SUCCESS: 'LIVE_STREAM_LIST_SUCCESS',

    listStreaming: (params) => ({
        type: actions.LIVE_STREAM_LIST_REQUEST,
        params: params
    }),
}
export default actions