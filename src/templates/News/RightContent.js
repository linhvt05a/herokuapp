import React, {useState, useEffect } from 'react';
import {CommonMenu, HotNews, CommonFilter} from './index'
import {newsFilterAction } from "../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
const data = [20, 60]
const data1 = [10, 80]
const defaultValue = [{value:"" , label:'Categories'}]

const RightContent = (props) => {
    const{data,  newsCategories} = props
    const[projectSelectList,setProjectList] = useState(null)
    const[nameSearch, setName] = useState('')
    const[cateID, setCateId] = useState('')
    const[dateFrom, setDateFrom] = useState('')
    const[dateTo, setDateTo] = useState('')
    const dispatch = useDispatch();
    const [navigate, setNavigate] = useState({})

    const projectSelect = useSelector(state => state.projectSelectReducer);
    const projectSelectSuccess = projectSelect.projectList.success
    const projectList = projectSelectSuccess ? projectSelect.projectList.detail : null;

    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        if (projectList && projectList.length > 0) {
            let newData = [];
            projectList.map((item) => {
                newData.push(createData(item.id, item.name))
            })
            setProjectList(newData)
        }
    }, [projectList]);
    const onClick = (id) =>{
        setNavigate(id)
    }
    const handleFilter = () =>{
        dispatch(newsFilterAction.filterNews({nameSearch, cateID, dateFrom, dateTo}))
    }
    const handleChange = (e) =>{
        const value = e.target.value
        setName(value)
    }
    const changeSelect = (value) =>{
        setCateId(value)
    }

    const changeDateFrom = (value) =>{
        convertDateFrom(value)
    }

    const changeDateTo = (value) =>{
        convertDateTo(value)
    }

    function convertDateTo(value){
        const date = moment(value).format('DD/MM/YYYY')
        setDateTo(date)
        return date
    }
    function convertDateFrom(value){
        const date = moment(value).format('DD/MM/YYYY')
        setDateFrom(date)
        return date
    }
    return (
        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-sm-3">
            <div className="col-right_news">
                <div className="row">
                {/*Menu*/}
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="card">
                        <CommonMenu label="Categories" navigate={navigate} dataMenu={newsCategories} onClick={onClick} className="options mb-4 bg_grey"/>
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
                    />
                </div>
            </div>
            </div>
          </div>
        
    );
}
export default  RightContent