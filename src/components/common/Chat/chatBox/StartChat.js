import React, { useEffect, useState, useRef } from 'react';
import { Input, Form, Upload, Button } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import { withTranslation,Trans } from 'react-i18next';

const FormItem = Form.Item;
const StartChat = (props) => {

    //props
    const { active, dataContact, setActive, clearChat, setClear, t} = props;

    //state
    const [emojiActive, setEmojiActive] = useState(false);
    const [message, setMessages] = useState({
        listMessages: [],
        itemMessage: {
            text: 'Chào bạn,',
            type: 'you'
        }
    });

    //form
    const [formChat] = Form.useForm();
    const [formChatInputFile] = Form.useForm();

    //ref
    const refScrollToBottom = useRef();
    const refInputMessage = useRef();

    //scroll to bottom 
    const scrollToBottom = () => {
        refScrollToBottom.current.scrollTop = refScrollToBottom.current.scrollHeight;
    }

    //list icon
    const listIcons = ["😀", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "😋", "😛", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "🥳", "😎", "👋", "👌", "✌", "🖐", "🤘", "👈"]


    //active and clear chat
    useEffect(() => {
        if (clearChat) {
            setMessages({
                ...message,
                listMessages: []
            })
            setClear()
        }
    }, [clearChat]);

    // active: go bottom and add item "hello"

    useEffect(() => {
        if (active) {

            // set message hello 
            message.listMessages.push(message.itemMessage)
            setMessages({
                ...message,
                listMessages: message.listMessages
            })

            scrollToBottom()
        }
    }, [active])

    // on enter chat 
    const onSubmitChat = (event) => {
        let EventMessageValue = {
            text: event.message_item,
            type: 'me'
        }
        let newData = [].concat(message.listMessages);
        newData.push(EventMessageValue)
        setMessages({
            itemMessage: EventMessageValue,
            listMessages: newData
        })

        // if has emoji -> hide emoji 
        emojiActive ? setEmojiActive(false) : '';

    }

    // effect when has new message 
    useEffect(() => {
        scrollToBottom();
        formChat.resetFields();
    }, [message])


    // chat icon 
    let iconsArrayTemp = [];
    const chooseIcon = (icon) => {

        //push icon to list temp
        iconsArrayTemp.push(icon)

        //set list icon to input
        formChat.setFieldsValue({
            message_item: iconsArrayTemp.join('')
        });

        // on focus to input 
        refInputMessage.current.focus()
    }


    // chat files 
    const listImg = [];
    const propsFiles = {
        action: listImg,
        onChange: handleUploadFiles,
    };

    const [file, setFileList] = useState([]) 
    const handleUploadFiles  = (info) => {
        var result = getBase64(info.file)

        console.log(result);


        let url =info.file.thumbUrl;
        console.log(url);
        // console.log('info:',info.file);
        let arr =[].concat(file)
        arr.push(info.file)
        // console.log(arr);
        setFileList(arr)
        const reader = new FileReader();
        // reader.readAsDataURL(info.file.thumbUrl)

        // console.log(file);

    };
    const handleRequestFiles  = (info) => {
    };

   
    return (
        <div className={`start_chat startChat ${active ? "active" : ''}`}>
            <div className="chat">
                <div className="chat--box chatBox section-scroll" ref={refScrollToBottom}>
                    {message.listMessages.map((item, index) => {
                        return <div className={`item ${item.type}`} key={index}>{item.text}</div>
                    })}

                    { file.length > 0 && file.map((file, key) =>{
                        return ( <div className="item me image" key={key}><img src={file.thumbUrl} /></div>)
                    })}

                </div>

                <div className="chat--input">
                    <Form noValidate
                        form={formChat}
                        onFinish={onSubmitChat}
                        name="form-chat-online">
                        <FormItem name="message_item" >
                            <Input className="typing" type="text" placeholder={t('insert_content_and_enter_to_send')} ref={refInputMessage} />
                        </FormItem>
                    </Form>

                    <span className="media">
                        <div className="chatFiles files">
                            <Upload
                                name="uploadFiles"
                                action="http://localhost:3001/api/"
                                fileList={file}
                                data={propsFiles}
                                multiple={false}
                                listType="picture-card"
                                customRequest={ (e)=>handleRequestFiles(e)}
                                onChange={handleUploadFiles}
                            >
                                <i className="fas fa-paperclip" />
                            </Upload>
                        </div>
                        <i className="far fa-smile emoji" onClick={() => setEmojiActive(!emojiActive)} />
                    </span>
                </div>

                <div className={`list_emoji ${emojiActive ? 'active' : ''}`}>
                    {listIcons.map((item, index) => {
                        return <span role="img" aria-label="smile" onClick={() => chooseIcon(item)} key={index}>{item}</span>
                    })}
                </div>
            </div>
        </div>

    );
}

export default withTranslation()(StartChat);



