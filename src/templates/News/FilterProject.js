import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useForm } from 'antd/lib/form/Form';
import {ButtonStyle, InputBase, InputDatePicker, SelectCustom} from '../../components/base'
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import {newsAction, productAction} from "../../store/action/index";

const FilterProject = (props) =>{
    const[dateFrom, setDateFrom] = useState(null)
    const[dateTo, setDateTo] = useState(null)
    const[newsTitle, setTitle] = useState('')
    const[project_ID, setProjectId] = useState('')
    const[projectSelectList,setProjectList] = useState(null)
    const dispatch = useDispatch();

    const createData = (value, label) => {
        return { value, label }
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
    const onChangeDateFrom = (value) => {
        convertDateFrom(value)
    }
    const onChangeDateTo = (value) =>{
        convertDateTo(value)
    }
    const handleChange = (e) =>{
        const value = e.target.value
        setTitle(value)

    }
    const handleSelect = (value) =>{
        setProjectId(value)
    }
    const filterSearch = () =>{
        dispatch(newsAction.filterNews({newsTitle, project_ID, dateFrom, dateTo}))
    }

    const projectSelect = useSelector(state => state.projectSelectReducer);
    const projectSelectSuccess = projectSelect.projectList.success
    const projectList = projectSelectSuccess ? projectSelect.projectList.detail : null;

    useEffect(() => {
        dispatch(projectAction.loadProjectList({}))
    }, []);

    useEffect(() => {
        if (projectList && projectList.length > 0) {
            let newData = [];
            projectList.map((item) => {
                newData.push(createData(item.id, item.name))
            })
            setProjectList(newData)
        }
    }, [projectList]);

    return(
        <div className="searchProject">
                <div className="searchProject__title">
                    <Trans>Search news by</Trans>
                </div>
                <InputBase name ="newTitle" placeholder="Enter Title" onChange={handleChange}/>
                <SelectCustom placeholder="Categories" name="project" datas={projectSelectList} onChange={handleSelect}/>
                <InputDatePicker style={{width: '100%', height: 48, marginBottom: 20}} name="dateFrom" placeholder="From date" onChange={onChangeDateFrom} />
                <InputDatePicker style={{width: '100%', height: 48, marginBottom: 20}} name="dateTo" placeholder ="To date" onChange={onChangeDateTo}/>
                <ButtonStyle className="btn btn_green text-uppercase w-100" href="#" label="SEARCH" onClick={filterSearch}/>
    </div>
    )
}


export default FilterProject