import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentcyDetailRequest, currentcyEditRequest } from "../../../store/action";
import { useHistory} from 'react-router';
import {
    CardHeader, Spinner
} from '../../../components/common';

import CardInfo from './Layout/CardInfo'


const PageCurrencyEdit = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({});
    const currentcyStore = useSelector(state => state.currency); // get value currentcy from reducer
    const dispatch = useDispatch();
    const navigate = useHistory();
    const { token } = props.user;
    // Process data from states of currencyReducer
    const isFetching = currentcyStore.isFetching || false;
    const isSuccess = currentcyStore.currentcyDetail.success;
    const isError = currentcyStore.currentcyDetail.error || currentcyStore.currentcyEdit.error;
    const currenceData = isSuccess ? currentcyStore.currentcyDetail.detail : [];
    const isUpdateSuccess = currentcyStore.currentcyEdit.success;

    useEffect(() => {
        props.setActiveItemMenu("menu_system_currency");
        dispatch(currentcyDetailRequest({ token, id: props.params.id }));
    }, []);
    const handleChange = (name, value) => {
        data[name] = value;
        setData(data);
    }
    const onSave = () => {
        setSubmitted(true);
        const { name, code } = data
        dispatch(currentcyEditRequest({token, id: props.params.id, name, code}));
    }
    const onCancle = () => {
    }
    return (
        <div>
            <CardHeader label="INFORMATION CURRENCY" />
            {isFetching && <Spinner />}
            {isSuccess && 
                <CardInfo onSave={onSave} 
                          data={currenceData} 
                          submitted={submitted} 
                          onCancle={onCancle} 
                          handleChange={handleChange}/>
            }
            { isError && props.showToast('error', isError) }
            { isFetching && isUpdateSuccess && props.showToast('success', currentcyStore.currentcyEdit.detail)}
        </div>
    )
}

export default PageCurrencyEdit;
