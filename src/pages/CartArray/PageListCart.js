import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {approvedListRequest} from '../../store/action/approval'
import {CardInfo, CardApprovedHistory} from './Layout/index'
import {DialogResponeHistory} from '../../components/dialogs'
import { Spinner } from '../../components/common';

const PageListCart = (props) =>{
    const [showPopUp, setShowPopUp] = useState(false)
    const product_request = useSelector(state => state.product_request)
    const dispatch = useDispatch()
    const {token} = props.user
    const {product_id} = 63
    useEffect(()=>{
        dispatch(approvedListRequest({token, product_id}))
    },[])

    const isFetching = product_request.isFetching;
    const isSuccess = product_request.success
    const isError = product_request.error

    const data = isSuccess ? product_request.detail: null

    
    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }
    console.log('product_request---------', data)
    return (
       <>   
        <CardInfo />
        {isError && props.showToast('error', isError)}
        <CardApprovedHistory data={data} handleClick ={handleClick}/>
        <DialogResponeHistory showPopUp={showPopUp} close ={()=>setShowPopUp(false)}/>
       </>
    )
}

export default PageListCart;