import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../dropdown"

class Message extends Component {
    render() {
        const { data } = this.props;
        return (
            <li className="message-item" data-chat="group_158997134020212">
                <a href="/chat"></a>
                <div className="message-child">
                    <div className="avatar">
                        <figure className="image">
                            <img src={data.url} alt=""/>
                        </figure>
                        <i className="fa fa-circle status status_4"></i>
                    </div>
                    <div className="info">
                        <span className="user-name" data-name={data.name}>
                            <i className="name_detail">{data.name}</i>
                            <i className="icon-read las la-check-double"></i>
                        </span>
                        <span className="text d-inline-block text-truncate">{data.content}</span>
                    </div>
                </div>
            </li>
        )
    }
}

class ButtonChat extends DropItem {
    render() {
        return (
            <div className="item dropdown" ref={node => this.node = node } >
                <span className="edit-system">
                    <i className="lar la-comment-alt"></i>
                </span>

                <div className={ this.state.show ? 'dropdown-menu chatbox show' : 'dropdown-menu chatbox' } x-placement="bottom-start" style={{"position": "absolute", "transform": "translate3d(119px, 50px, 0px)", "top": "0px", "left": "0px"}}>
                    <div className="drop-title uni_text_6d30ab"><Trans>New Messages</Trans></div>
                    <ul className="list-style-none" id="popup_chat_notification">
                        {
                            this.props.messages.map( (item, index) =>
                            <Message key={index} data={item} />
                        )}
                    </ul>
                    <div className="all_messages">
                        <a href="/chat">
                            <strong className="uni_text_6d30ab"><Trans>View</Trans></strong>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonChat;
