import React, { useState, useEffect } from 'react';
import {CommonMenu} from '../../News/index';
import {JuridicalBox} from './index'
import { useDispatch, useSelector } from "react-redux";
import { legalCategoriesAction } from "../../../store/action/index";

const TopRightBar = () =>{
    const dispatch = useDispatch();
    const[navigate, setNavigate] = useState('')
    const handleClick = (id) =>{
        setNavigate(id)
    }
    const legalCates = useSelector(state => state.legalCategoriesReducer);
    const legalCateSuccess = legalCates.legalCates.success
    const legalCategories = legalCateSuccess ? legalCates.legalCates.detail : null;

    useEffect(() => {
        dispatch(legalCategoriesAction.legalCates({}));
    }, []);
    return(
        <div className="col-md-5 col-lg-4 col-xl-4">
                <CommonMenu 
                    className="options mb-4 bg_white" 
                    label="Categories" 
                    dataMenu={legalCategories} 
                    className="options mb-4 bg_white" onClick = {handleClick}
                    navigate ={navigate}
                />
                <JuridicalBox />
        </div>
    )

}

export default TopRightBar