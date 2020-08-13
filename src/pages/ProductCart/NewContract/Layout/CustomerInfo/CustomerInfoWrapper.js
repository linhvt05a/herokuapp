import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionsCustomer } from '../../../../../store/action';
import CustomerInfoForm from './CustomerInfoForm';

const CustomerInFoWrapper = (props) => {
    const [state, setState] = useState({
        typeCustomer: 0
    });


    const customerStore = useSelector(state => state.customer); // get data from reducer
    const isSuccess = customerStore.customerList.success || false;
    const customerDetail = isSuccess ? customerStore.customerList.detail : null;
    const dispatch = useDispatch();
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx=';

    return (
        <CustomerInfoForm typeCustomer={state.typeCustomer}
            changeTypeCustomer={(value) => setState({ ...state, typeCustomer: value })}
            customerList={customerDetail ? customerDetail : []}
            isSuccess={isSuccess}
        />
    )
}

export default CustomerInFoWrapper;