import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { approvedListRequest, commentListRequest, addCommentRequest } from '../../store/action/approval'
import {productDetailRequest} from '../../store/action/product'
import { CardInfo, CardApprovedHistory } from './Layout/index'
import { DialogResponeHistory } from '../../components/dialogs'


const PageListCart = (props) => {
    const [showPopUp, setShowPopUp] = useState(false)
    const product_request = useSelector(state => state.product_request)
    const product_detail = useSelector(state => state.productDetail)
    const project_detail = useSelector(state => state.cart.Detail)
    const dispatch = useDispatch()
    const [request_type, setType] = useState(null)
    const [request_status, setStatus] = useState(null)
    const [priority, setPriority] = useState(null)
    const [order_by_oldest, setOldest] = useState(false)
    const [content, setContent] = useState('')
    const [file, setFile] = useState(null)

    const token = "MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx"
    const request_id = 2
    const product_id = 63
    const tab_include = []
    useEffect(() => {
        dispatch(commentListRequest({ token, request_id }))
        dispatch(productDetailRequest({token, product_id, tab_include}))
    }, [])
    
    const isFetching = product_request.isFetching;
    const approveSuccess = product_request.approveList.success
    const commentSuccess = product_request.commentList.success
    const isCommentSuccess = product_request.commentAdd.success

    const data = approveSuccess ? product_request.approveList.detail.approvals : null
    const list_comment = commentSuccess ? product_request.commentList.detail : null
    const productsDetail =  product_detail.productDetail.detail
  
    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }
    const onChange = (value, option) => {
        if (option.name === "request_type") {
            setType(value)

        } else if (option.name === "request_status") {
            setStatus(value)

        } else if (option.name === "priority") {
            setPriority(value)
        } else {
            
        }
    }

    const onSearch = () => {
        dispatch(approvedListRequest({ token, product_id, request_type, request_status, priority, order_by_oldest}))
    }

    const sendMessage = () =>{
        dispatch(addCommentRequest({token, request_id, content, file}))
    } 

    const changeComment = (value) =>{
        setContent(value)
    }
    return (
       
        <>
            <CardInfo productDetail={productsDetail} project_detail = {project_detail}/>
            <CardApprovedHistory
                approveSuccess={approveSuccess}
                isFetching={isFetching}
                data={data}
                handleClick={handleClick}
                list_comment={list_comment}
                onChange={onChange}
                onSearch={onSearch}
                
            />

            <DialogResponeHistory 
                    isCommentSuccess ={isCommentSuccess} 
                    changeComment={changeComment} sendMessage={sendMessage} 
                    image={props.user.avatar_url} showPopUp={showPopUp} 
                    close={() => setShowPopUp(false)} 
                    list_comment={list_comment}
            />
        </>
    )
}

export default PageListCart;