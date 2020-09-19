import React, { useState , useEffect} from "react";
import CardHeader from '../../../components/common/CardHeader'
import {TopRightBar, CollapseContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { legalAction } from "../../../store/action/index";

const Juridical = (props)=> {
  const dispatch = useDispatch();
  const[navigate, setNavigate] = useState(null)
  const legalList = useSelector(state => state.legalReducer);
  const newsListSuccess = legalList.legalList.success
  const listLegal = newsListSuccess ? legalList.legalList.detail : null;

  const legalRecord = newsListSuccess ? legalList.legalList : null;

  const total_page = legalRecord && legalRecord != null ? legalRecord.total_page : null
    const total_record =legalRecord && legalRecord != null ? legalRecord.total_record: null
    const page = legalRecord && legalRecord != null ? legalRecord.page: null
    const limit = 0
    
  useEffect(() => {
    dispatch(legalAction.legalList({}))
}, []);

const handleChangePage = (value)=>{
  dispatch(legalAction.legalList({page:value, limit:limit}))
}
const handleClick = (category_id) =>{
  setNavigate(category_id)
  dispatch(legalAction.legalList({category_id}))
}
        return (
            <div className="juridical">
            <div className="container container-sm container-md">
              <CardHeader label="legal_title"/>
              <div className="row">
                <CollapseContent 
                  data={listLegal} 
                  handleChangePage={handleChangePage} 
                  total_page ={total_page}
                  total_record={total_record}
                  page={page}
                  limit={limit}
                />
                <TopRightBar navigate={navigate} handleClick={handleClick}/>
              </div>
            </div>
          </div>
        )
}
export default Juridical;
