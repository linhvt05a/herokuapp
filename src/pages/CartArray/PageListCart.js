import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {approvedListRequest} from '../../store/action/approved'
import {CardInfo, CardApprovedHistory} from './Layout/index'
import {DialogResponeHistory} from '../../components/dialogs'
import { Spinner } from '../../components/common';

const PageListCart = (props) =>{
    const [showPopUp, setShowPopUp] = useState(false)
    const approveList = useSelector(state => state.approveList)
    const dispatch = useDispatch()
    const {token} = props.user
    const {product_id} = 63
    useEffect(()=>{
        dispatch(approvedListRequest({token, product_id}))
    },[])

    const isFetching = approveList.isFetching;
    const isSuccess = approveList.approveList.success
    const isError = approveList.approveList.error

    const data = isSuccess ? approveList.approveList.detail.approvals: null
    
    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }
    
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