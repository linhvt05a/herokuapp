import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../dropdown"

class Message extends Component {
    render() {
        const { data } = this.props;
        return (
            <li className="message-item " data-chat="user_159106755389712">
                <div className="message-child">
                <div className="avatar">
                    <figure className="image">
                    <img src="{data.url}" alt="{data.url}" />
                    </figure>
                    <i className="fa fa-circle status status_4" />
                </div>
                <div className="info">
                    <span className="user-name" data-name="{data.name}"><i className="name_detail">{data.name}</i></span>
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

            <div className="item dropdown" ref={node => this.node = node }>
                <a className="actions_item">
                    <i className="icon lar la-comment-alt" />
                    <i className="badge-noti" id="count_noti">0</i>
                </a>
                <div className={ this.state.show ? 'dropdown-menu chatbox show' : 'dropdown-menu chatbox' } >
                    <div className="drop-title uni_text_6d30ab">
                        <h5 className="title uni_text_6d30ab ml-2"><Trans>New Messages</Trans></h5>
                    </div>

                    <ul className="list-style-none" id="popup_chat_notification">
                        {
                            this.props.messages.map( (item, index) =>
                            <Message key={index} data={item} />
                        )}
                    </ul>
                    
                    <div className="all_messages">
                        <a>
                            <strong className="uni_text_6d30ab"><Trans>View</Trans></strong>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonChat;
