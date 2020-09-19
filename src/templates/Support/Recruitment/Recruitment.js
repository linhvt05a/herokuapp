import React, {useState} from "react";
import { Link } from "react-router-dom";
import HeadingLine from '../../../components/common/HeadingLine'
import {RecruitmentDept, RecruitmentList} from './index'


const Recruitment = () =>{
    return(
        <>
          <RecruitmentDept />  
          <RecruitmentList />
        </>
    )
}
export default Recruitment;
