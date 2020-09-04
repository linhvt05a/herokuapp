import React, { useState, useEffect } from 'react';
import {CommonMenu} from '../../News/index';
import {JuridicalBox} from './index'
import { useDispatch, useSelector } from "react-redux";
import { legalAction } from "../../../store/action/index";

const TopRightBar = () =>{
    const dispatch = useDispatch();
    const[navigate, setNavigate] = useState('')
    const handleClick = (id) =>{
        setNavigate(id)
    }
    const legalCates = useSelector(state => state.legalReducer);
    const legalCateSuccess = legalCates.legalCategories.success
    const legalCategories = legalCateSuccess ? legalCates.legalCategories.detail : null;
    
    useEffect(() => {
        dispatch(legalAction.legalCates({}));
    }, []);
    return(
        <div className="col-md-5 col-lg-4 col-xl-4">
                <CommonMenu 
                    className="options mb-4 bg_white" 
                    label="Categories" 
                    dataMenu={legalCategories} 
                    className="options mb-4 bg_white" 
                    onClick = {handleClick}
                    navigate ={navigate}
                    disableDisplay ={true}
                />
                <JuridicalBox />
        </div>
    )

}

export default TopRightBar