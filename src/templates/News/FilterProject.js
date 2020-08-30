import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useForm } from 'antd/lib/form/Form';
import {ButtonStyle, InputBase, InputDatePicker, SelectCustom} from '../../components/base'
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import {newsFilterAction} from "../../store/action/index";

const data = [0, 0]
const data1 = [0, 0]
const province = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]

const FilterProject = (props) =>{
    const[dateFrom, setDateFrom] = useState(null)
    const[newsTitle, setTitle] = useState('')
    const dispatch = useDispatch();

    function convertDate(value){
        const date = moment(value).format('DD/MM/YYYY')
        setDateFrom(date)
        return date
    }

    const onChange = (name, value) => {
        convertDate(value, name)
    }
    
    const handleChange = (e) =>{
        const value = e.target.value
        setTitle(value)

    }
    const handleSelect = () =>{

    }
    const filterSearch = () =>{
    
        dispatch(newsFilterAction.filterNews({}))
    }
    return(
        <div className="searchProject">
                <div className="searchProject__title">
                    <Trans>Search news by</Trans>
                </div>
                <InputBase name ="newTitle" placeholder="Enter Title" onChange={handleChange}/>
                <SelectCustom placeholder="Categories" name="district" datas={[]} onChange={handleSelect}/>
                <InputDatePicker style={{width: '100%', height: 48, marginBottom: 20}} name="dateFrom" placeholder="From date" onChange={onChange} />
                <InputDatePicker style={{width: '100%', height: 48, marginBottom: 20}} name="dateTo" placeholder ="To date" onChange={onChange}/>
                <ButtonStyle className="btn btn_green text-uppercase w-100" href="#" label="SEARCH" onClick={filterSearch}/>
    </div>
    )
}


export default FilterProject