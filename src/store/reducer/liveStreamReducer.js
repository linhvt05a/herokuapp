import { liveStreamAction } from "../action";
const initialState = {
    listStreaming: {"success": true, "detail":[
        {
            id: 1,
            title : "Tổng quan dự án Smart City",
            videoURL:"'https://www.youtube.com/watch?v=ysz5S6PUM-U'",
            timePost:"09:25",
            postAt : "27/07/2020"
        },
        {
            id: 2,
            title : "Tổng quan dự án Smart City",
            videoURL:"'https://www.youtube.com/watch?v=ysz5S6PUM-U'",
            timePost:"09:25",
            postAt : "27/07/2020"
        },
        {
            id: 3,
            title : "Tổng quan dự án Smart City",
            videoURL:"'https://www.youtube.com/watch?v=ysz5S6PUM-U'",
            timePost:"09:25",
            postAt : "27/07/2020"
        },
        {
            id: 4,
            title : "Tổng quan dự án Smart City",
            videoURL:"'https://www.youtube.com/watch?v=ysz5S6PUM-U'",
            timePost:"09:25",
            postAt : "27/07/2020"
        }
]}
}
export default (state = initialState, action) => {
    switch (action.type) {
      case liveStreamAction.LIVE_STREAM_LIST_SUCCESS:
        return {
          ...state,
          listStreaming: action.response,
          isFetching: true,
          isLoadingList: false,
        };
        default :
        return state;
}
}