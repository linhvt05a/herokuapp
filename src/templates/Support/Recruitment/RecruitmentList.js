import React, { useEffect, useState } from 'react';
import HeadingLine from '../../../components/common/HeadingLine'
import Pagination from '../../../components/common/Pagination'
import {RecruitmentItem} from './index'
import {LoadDataPaging} from '../../../functions/Utils'
import {RECRUITMENT_STATUS} from '../../../contant'
import { useDispatch, useSelector } from "react-redux";
import { recruitmentAction } from "../../../store/action/index";

const RecruitmentList = () =>{
  const recruitment = useSelector(state => state.recruitmentReducer);
  const recruitmentListSuccess = recruitment.recruitmentList.success
  const recruitmentRecord = recruitmentListSuccess ? recruitment.recruitmentList : null
  const recruitmentList = recruitmentListSuccess ? recruitment.recruitmentList.detail : null;

  const total_page = recruitmentRecord && recruitmentRecord != null ? recruitmentRecord.total_page : null
  const total_record = recruitmentRecord && recruitmentRecord != null ? recruitmentRecord.total_record: null
  const page = recruitmentRecord && recruitmentRecord != null ? recruitmentRecord.page: null
  const limit = 0

  const dispatch = useDispatch();

  const filterStatus = (recruitID) =>{
    dispatch(recruitmentAction.recruitmentList({}))
  }
  const onPageChange = (value)=>{
    dispatch(recruitmentAction.recruitmentList({page: value, limit: 3}))
  }
    useEffect(() => {
        dispatch(recruitmentAction.recruitmentList({limit: 4}))
    },[]);
    return (
        <div className="recruitment label_filter bg_grey">
        <div className="container container-sm container-md">
            <HeadingLine headerBodyClassName="label_filter--heading" labelHeader="recruitment_position" data={RECRUITMENT_STATUS} options= {[]} onChange={filterStatus} />
          <div className="recruitment--content">
            <RecruitmentItem data ={recruitmentList}/>
            <Pagination data ={LoadDataPaging(total_record,page,total_page,limit)} onChange ={onPageChange}/>
          </div>
        </div>
      </div>
      
    )
}
export default RecruitmentList