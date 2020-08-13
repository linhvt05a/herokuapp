import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { customerListRequest } from '../../../../../store/action';
import CustomerInfoForm from './CustomerInfoForm';

const CustomerInFoWrapper = (props) => {
    const [typeCustomer, setTypeCustomer] = useState(0);
    const customerStore = useSelector(state => state.customer); // get data from reducer
    const isSuccess = customerStore.customerList.success || false;
    const customerDetail = isSuccess ? customerStore.customerList.detail : null;
    const dispatch = useDispatch();
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';

    useEffect(()=>{
        dispatch(customerListRequest({token, search: 'a'}));
    },[])

    const changeTypeCustomer = (value) => {
        setTypeCustomer(value);
    }

    return (
        <CustomerInfoForm typeCustomer = {typeCustomer}
                          changeTypeCustomer = {changeTypeCustomer}
                          customerList={customerDetail}
                          isSuccess={isSuccess}
        />
    )
}

export default CustomerInFoWrapper;