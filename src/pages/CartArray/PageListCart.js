import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {approvedListRequest, commentListRequest} from '../../store/action/approval'
import {CardInfo, CardApprovedHistory} from './Layout/index'
import {DialogResponeHistory} from '../../components/dialogs'
import { Spinner } from '../../components/common';

const PageListCart = (props) =>{
    const [showPopUp, setShowPopUp] = useState(false)
    const product_request = useSelector(state => state.product_request)
    const dispatch = useDispatch()
    const {token} = props.user
    const {product_id} = 63
    const {request_id} = 2
    useEffect(()=>{
        dispatch(approvedListRequest({token, product_id}))
        dispatch(commentListRequest({token, request_id}))
        
    },[])

    // const isFetching = product_request.isFetching;
    const approveSuccess = product_request.approveList.success
    const commentSuccess = product_request.commentList.success
    const isErrorApprove = product_request.approveList.error
    const isErrorComment = product_request.commentList.error

    const data = approveSuccess ? product_request.approveList.detail.approvals: null
    const list_comment = isSuccess ? product_request.commentList.detail : null
    
    console.log('----list comment-----' , list_comment)
    console.log('-----list approve----' , data)
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