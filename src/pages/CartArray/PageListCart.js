import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {approvedListRequest, commentListRequest} from '../../store/action/approval'
import {CardInfo, CardApprovedHistory} from './Layout/index'
import {DialogResponeHistory} from '../../components/dialogs'


const PageListCart = (props) =>{
    const [showPopUp, setShowPopUp] = useState(false)
    const product_request = useSelector(state => state.product_request)
    const dispatch = useDispatch()
    const[request_type, setType] = useState(null)
    const[request_status, setStatus] = useState(null)
    const[priority, setPriority] = useState(null)
    const product_id = 63
    const token = "MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx"
    const request_id = 2
    useEffect(()=>{
        dispatch(commentListRequest({token, request_id}))
    },[])

    const isFetching = product_request.isFetching;
    const approveSuccess = product_request.approveList.success
    const commentSuccess = product_request.commentList.success
    const isErrorApprove = product_request.approveList.error
    const isErrorComment = product_request.commentList.error

    const data = approveSuccess ? product_request.approveList.detail.approvals: null
    const list_comment = commentSuccess ? product_request.commentList.detail : null
    
    console.log('----list comment-----' , list_comment)
    console.log('-----list approve----' , data)
    
    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }
    const onChange = (value, option) => {
       if(option.name === "request_type"){
            setType(value)
            
       }else if(option.name === "request_status"){
        setStatus(value)
    
   }else if(option.name === "priority"){
    setPriority(value)
}else {
    console.log(option.name)
}
}

const onSearch= () => {
    dispatch(approvedListRequest({token, product_id, request_type, request_status, priority}))
}
return (
       <> 
        <CardInfo />
         <CardApprovedHistory 
            approveSuccess={approveSuccess} 
            isFetching={isFetching} 
            data={data} 
            handleClick ={handleClick}
            list_comment ={list_comment}
            onChange ={onChange}
            onSearch={onSearch}
        />
        <DialogResponeHistory showPopUp={showPopUp} close ={()=>setShowPopUp(false)} list_comment ={list_comment}/>
       </>
    )
}

export default PageListCart;