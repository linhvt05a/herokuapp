import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardHeader from '../../../components/common/CardHeader'
import Pagination from '../../../components/common/Pagination'
import CardSearch from '../../../components/common/CardSearch'
import {BottomRightBar, TopRightBar, CollapseContent} from './index'

const data = [
  {id: 1, title:'Các điều kiện và điều khoản dịch vụ', content:''},
  {id: 2, title:'Miễn trừ trách nhiệm  ', content:''},
  {id: 3, title:'Các điều kiện và điều khoản dịch vụ', content:''},
  {id: 4, title:'Nội quy khác của giao dịch', content:''}
]

const Juridical = ()=> {
  const [paging, setPaging] = useState({
    totalItem: 18,
    currentPage:  2,
    totalPage: 5,
    itemOnPage: 6
});
  const[isOpenCollapse, setOpenCollapse] = useState({})
      const openCollapse = (index) =>{
        setOpenCollapse(prevState => ({...prevState, [index]: !Boolean(prevState[index])}))
      }

        return (
            <div className="juridical">
            <div className="container container-sm container-md">
              <CardHeader label="Juridical"/>
              <div className="row">
                <CollapseContent data={data} dataPaging={paging} isOpenCollapse={isOpenCollapse} openCollapse={openCollapse} />
                <TopRightBar />
              </div>
              
            </div>
          
          </div>
        
        )
}
export default Juridical;
