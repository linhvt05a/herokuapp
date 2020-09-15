import React, {useState, useEffect } from 'react';
import {CommonMenu, HotNews, CommonFilter} from './index'
import {newsFilterAction } from "../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
const defaultValue = [{value:"" , label:'Categories'}]

const RightContent = (props) => {
    const{data, paramsSearch,dateFrom, dateTo, titleNews,newsCategories, handleFilter,cateID, handleChange, changeDateTo, changeDateFrom, changeSelect} = props
    const[projectSelectList,setProjectList] = useState(null)
    const dispatch = useDispatch();
    const [navigate, setNavigate] = useState('')
    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        if (newsCategories && newsCategories.length > 0) {
            let newData = [];
            newsCategories.map((item) => {
                newData.push(createData(item.category_id, item.category_name))
            })
            setProjectList(newData)
        }
    }, [newsCategories]);
    const onClick = (id) =>{
        setNavigate(id)
    }
   
    
    return (
        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-sm-3">
            <div className="col-right_news">
                <div className="row">
                {/*Menu*/}
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="card">
                        <CommonMenu label="Categories" linkTo="/news"  navigate={navigate} dataMenu={newsCategories} onClick={onClick} className="options mb-4 bg_grey"/>
                    </div>
                </div>
                {/*Hot News*/}
                    <HotNews data={data}/>
                {/*Search project*/}
                <div className="col-sm-12 col-md-12 col-xl-12" style={{marginTop: 45}}>
                    <CommonFilter 
                            title="Search for news" 
                            placeholder="Enter Title"
                            defaultValue = {cateID == "" ? defaultValue[0].label : ''}
                            datas ={projectSelectList} 
                            handleChange = {handleChange}
                            changeSelect = {changeSelect}
                            changeDateFrom ={changeDateFrom}
                            changeDateTo={changeDateTo}
                            handleFilter={handleFilter}
                            paramsSearch={paramsSearch}
                            titleNews={titleNews}
                            dateFrom={dateFrom}
                            dateTo={dateTo}
                    />
                </div>
            </div>
            </div>
        </div>
        
    );
}
export default  RightContent