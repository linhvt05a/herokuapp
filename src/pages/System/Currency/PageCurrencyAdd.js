import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentcyAddRequest } from "../../../store/action";
import { useHistory} from 'react-router';
import {
    CardHeader, Spinner
} from '../../../components/common';

import CardInfo from './Layout/CardInfo'


const PageCurrencyAdd = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({});
    const currentcyStore = useSelector(state => state.currency); // get value currentcy from reducer
    const dispatch = useDispatch();
    const navigate = useHistory();
    const { token } = props.user;
    // Process data from states of currencyReducer
    const isFetching = currentcyStore.isFetching || false;
    const isError = currentcyStore.currentcyAdd.error;
    const isUpdateSuccess = currentcyStore.currentcyAdd.success;

    const handleChange = (name, value) => {
        data[name] = value;
        setData(data);
    }
    const onSave = () => {
        setSubmitted(true);
        const { name, code } = data;
        dispatch(currentcyAddRequest({token, name, code}));
        navigate.push('/system/currency');
    }
    const onCancle = () => {
    }
    return (
        <div>
            <CardHeader label="Add Currency" />
            {isFetching && <Spinner />}
            { isError && props.showToast('error', isError) }
            { isUpdateSuccess && props.showToast('success', currentcyStore.currentcyAdd.detail.message) }
            <CardInfo   onSave={onSave} 
                        data={data} 
                        submitted={submitted} 
                        onCancle={onCancle} 
                        handleChange={handleChange}/>
        </div>
    )
}

export default PageCurrencyAdd;