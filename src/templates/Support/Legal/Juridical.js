import React, { useState , useEffect} from "react";
import CardHeader from '../../../components/common/CardHeader'
import {TopRightBar, CollapseContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import { legalAction } from "../../../store/action/index";

const Juridical = (props)=> {
  const dispatch = useDispatch();
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
  const[isOpenCollapse, setOpenCollapse] = useState({})
      const openCollapse = (index) =>{
        setOpenCollapse(prevState => ({...prevState, [index]: !Boolean(prevState[index])}))
}
const handleChangePage = (value)=>{
  dispatch(legalAction.legalList({page:value, limit:limit}))
}

        return (
            <div className="juridical">
            <div className="container container-sm container-md">
              <CardHeader label="Juridical"/>
              <div className="row">
                <CollapseContent 
                  data={listLegal} 
                  handleChangePage={handleChangePage} 
                  isOpenCollapse={isOpenCollapse} 
                  openCollapse={openCollapse} 
                  total_page ={total_page}
                  total_record={total_record}
                  page={page}
                  limit={limit}
                />
                <TopRightBar />
              </div>
            </div>
          </div>
        
        )
}
export default Juridical;
