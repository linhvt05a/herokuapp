import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { approvedListRequest, commentListRequest, addCommentRequest } from '../../store/action/approval'
import {productDetailRequest} from '../../store/action/product'
import { CardInfo, CardApprovedHistory } from './Layout/index'
import { DialogResponeHistory } from '../../components/dialogs'
import {ModalHistoryAprroval} from './Layout'


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
    const[request_id, setRequestId] = useState(0)
    const [requestStatus, setReqStatus] = useState(0)
    const[validContent, setValid]  =  useState('')
    const[page, setPage] = useState(1)
    const[total_record, setTotalRecord] = useState(0)
    const[total_page, setTotalPage] = useState(0)
    const[limit_order_by_last, setLimitPage] = useState()

    const token = "MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx"
    const product_id = 63
    const tab_include = []

    useEffect(() => {
        dispatch(productDetailRequest({token, product_id, tab_include}))
    }, [])
    
    const isFetching = product_request.isFetching;
    const isFetchingComment = product_request.isFetching
    const approveSuccess = product_request.approveList.success
    const isFetchingApprove = product_request.approveList.isFetching
    const commentSuccess = product_request.commentList.success
    const isCommentSuccess = product_request.commentAdd.success
    const productSuccess = product_detail.productDetail.success
    const dataApprove = approveSuccess ? product_request.approveList.detail.approvals : null
    const totalApprove = approveSuccess ? product_request.approveList.detail.total_approvals : 0
    const list_comment = commentSuccess ? product_request.commentList.detail : null
    const productsDetail =  productSuccess ? product_detail.productDetail.detail : []

    const handleClick =  (request_id, request_status) => {
        setReqStatus(request_status)
        setShowPopUp(!showPopUp)
        setRequestId(request_id)
        dispatch(commentListRequest({ token, request_id, page }))
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
    
    const sendMessage = (request_id) =>{
        if(content === ""){
            setValid('Content not null')
        }else {
            setValid('')
            dispatch(addCommentRequest({token, request_id, content, file}))
        }
       
    } 

    const changeComment = (value) =>{
        setContent(value)
    }
    const handleLoadMore = (limit) =>{
        
    }
  
    return (
       
        <>
            <CardInfo productDetail={productsDetail} project_detail = {project_detail} />
            <CardApprovedHistory
                approveSuccess={approveSuccess}
                isFetching={isFetchingApprove}
                listApprove={dataApprove}
                totalApprove = {totalApprove}
                handleClick={handleClick}
                list_comment={list_comment}
                onChange={onChange}
                onSearch={onSearch}
                

            />
        
            <DialogResponeHistory 
                    page={page}
                    isLoading ={isFetchingComment} 
                    changeComment={changeComment} sendMessage={sendMessage} 
                    image={props.user.avatar_url} showPopUp={showPopUp} 
                    close={() => setShowPopUp(false)} 
                    list_comment={list_comment}
                    data = {dataApprove}
                    request_id={request_id}
                    requestStatus={requestStatus}
                    validContent={validContent}
                    token={token}
                    handleLoadMore = {handleLoadMore}

            />
        </>
    )
}

export default PageListCart;