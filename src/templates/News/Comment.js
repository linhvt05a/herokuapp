import React, { Component } from 'react';
import {TextArea, ButtonStyle} from '../../components/base/index'

const Comment = () => {
    return (
        <>
        <div className="comment flex-column align-items-start">
            <div className="comment_title mb-2">BÌNH LUẬN</div>
            <TextArea width={700} placeholder="Your comment"/>
        </div>
            <ButtonStyle className="btn btn_purple btn_send" label="SEND"/>
        </>
    )
}
export default Comment