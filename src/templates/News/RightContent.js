import React, { Component, useState } from 'react';
import {CommonMenu, HotNews, FilterProject} from './index'
import CardFilter from '../../components/common/CardFilter'

const dataMenu = [{id: 1, label:'Tin tức thị trường'}, {id: 2, label:'Thị trường căn hộ'}, {id: 3, label:'Nhà đẹp'}, {id: 4, label:'Báo cáo phân tích'}]
const data = [20, 60]
const data1 = [10, 80]

const RightContent = (props) => {
    const{hotList} = props
    const [navigate, setNavigate] = useState({})
    const onClick = (id) =>{
        setNavigate(id)
    }
    return (
        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-sm-3">
            <div className="col-right_news">
              <div className="row">
                {/*Menu*/}
                    <CommonMenu label="Categories" navigate={navigate} dataMenu={dataMenu} onClick={onClick}/>
                {/*Hot News*/}
                    <HotNews data={hotList}/>
                {/*Search project*/}
                    <CardFilter 
                        label="Product search" 
                        range ={true} 
                        tooltipVisible={true} 
                        reverse={true} 
                        data={data} 
                        data1={data1} 
                        title1="Price range" 
                        currency1="tỷ đồng" 
                        title2="Acreage" 
                        item1="m" item2="2"
                        datas1 ={[{value:"", label:'--'}]}
                        datas2 ={[{value:"", label:'--'}]}
                        titleButton = "Search"
                        styleButton ="btn btn_green text-uppercase w-100"
                    />
                    
              </div>
            </div>
          </div>
        
    );
}
export default  RightContent