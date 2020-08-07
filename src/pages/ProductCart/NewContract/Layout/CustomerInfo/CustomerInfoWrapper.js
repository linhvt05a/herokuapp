import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CustomerInfoForm from './CustomerInfoForm';

const CustomerInFoWrapper = (props) => {
    const [typeCustomer, setTypeCustomer] = useState(0);
    const customerStore = useSelector(state => state.customer); // get data from reducer
    const isSuccess = customerStore.customerList.success;
    const customerList = isSuccess ? customerStore.currentcyList.detail : null;
    //const dispatch = useDispatch();
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    console.log('customerStore', customerStore);

    const changeTypeCustomer = (value) => {
        setTypeCustomer(value);
    }

    return (
        <CustomerInfoForm typeCustomer = {typeCustomer}
                            changeTypeCustomer = {changeTypeCustomer}
                            token = {token}
                            customerList={customerList}
                            isSuccess={isSuccess}
        />
    )
}

export default memo(CustomerInFoWrapper);