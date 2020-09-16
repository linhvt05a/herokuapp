import { recruitmentAction } from '../action';

const initialState = {
    recruitmentList: {
        "success": true, "detail":[
            {id: 1, jobTitle: "Kỹ thuật xây dựng", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 2, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 3, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 4, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 5, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 6, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 7, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"},
            {id: 8, jobTitle: "Kỹ thuật xây dựng ", jobDept:"Nhóm kỹ thuật", qty: 1, place:"HCM", type: "PART TIME"}
        ],
        total_page: 20,
        total_record: 40,
        page: 1
        
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case recruitmentAction.RECRUITMENT_LIST_SUCCESS:
            return {
                ...state,
                recruitmentList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}