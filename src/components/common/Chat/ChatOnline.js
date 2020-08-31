import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";

import {SendInfo, StartChat, EndChat} from './chatBox'

const ChatOnline = (props) => {
    // props 
    const { active, setActive } = props;

    //state
    const [show, setStartChat] = useState({
        sendInfo: false,
        startChat: false,
        endChat: false,
        loading: false,
        clearChat : false
    });

    //end chat
    const set_EndChat = () => {
        setStartChat({
            ...show,
            sendInfo: false,
            startChat: false,
            endChat: true
        })
    }

    // exit chat 
    const set_Exit = () => {
        setActive(false)
        setStartChat({
            ...show,
            sendInfo: false,
            startChat: false,
            endChat: false
        })
    }

    //go back
    const set_Back = () => {
        setStartChat({
            ...show,
            sendInfo: false,
            startChat: true,
            endChat: false
        })
    }

    //effect ACTIVE chat component
    useEffect(() => {
        if (active) {
            setStartChat({
                ...show,
                sendInfo: true,
                startChat: false,
                endChat: false
            })
        }

    }, [active])

    
    // on submit info 
    const onSubmitInfo = values => {
        // console.log('Success:', values);
        setStartChat({
            ...show,
            sendInfo: false,
            startChat: true,
            endChat: false, 
            clearChat : true
        })

    };


    return (
        <div className={`chat_online chatOnline ${active ? "active" : ''}`}>
            <label className="chatLabel">
                Tư vấn trực tuyến
                <i onClick={set_EndChat} className={`close_chat fas fa-times-circle ${active ? "active" : ''}`} />
            </label>
            <SendInfo active={show.sendInfo} onSubmitInfo={onSubmitInfo}/>
            <StartChat active={show.startChat} clearChat={show.clearChat} setClear={()=>setStartChat({...show,clearChat:false})} />
            <EndChat active={show.endChat} set_Exit={set_Exit} set_Back={set_Back} />
        </div>
    );
}

export default ChatOnline;