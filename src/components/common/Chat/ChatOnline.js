import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import {SendInfo, StartChat, EndChat} from './chatBox';
import { contactAddAction } from "../../../store/action/index";

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

    const dispatch = useDispatch();
    const contact = useSelector(state => state.contactAddReducer);
    const contactAddSuccess = contact.contactAdd.success;
    const contactList = contactAddSuccess ? contact.contactAdd.detail : null;

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
        dispatch(contactAddAction.contactAdd({
            full_name: values.fullname,
            email: values.email,
            phone_number: values.phone,
            content: values.question
        }));
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
                <Trans>online_counseling</Trans>
                <i onClick={set_EndChat} className={`close_chat fas fa-times-circle ${active ? "active" : ''}`} />
            </label>
            <SendInfo data={<Trans>full_name</Trans>} active={show.sendInfo} onSubmitInfo={onSubmitInfo}/>
            <StartChat dataContact={contactList} active={show.startChat} clearChat={show.clearChat} setClear={()=>setStartChat({...show,clearChat:false})} />
            <EndChat active={show.endChat} set_Exit={set_Exit} set_Back={set_Back} />
        </div>
    );
}

export default ChatOnline;