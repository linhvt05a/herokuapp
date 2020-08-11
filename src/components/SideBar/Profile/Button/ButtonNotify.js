import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../base/Dropdown"

class ButtonNotify extends DropItem {
    constructor(props){
        super(props);
        this.state = {
            ...this.state
        };
    }

    render() {
        return (
            <div className="item dropdown" ref={node => this.node = node } >
                <a className="actions_item">
                    <i className="icon las la-bell"></i>
                    <i className="badge-noti">9+</i>
                </a>
                <div className={ this.state.show ? 'dropdown-menu mailbox show' : 'dropdown-menu mailbox' }>
                    <ul className="list-style-none">
                        <li>
                            <div className="drop-title">
                                <h5 className="title uni_text_6d30ab ml-2">New Messages</h5>
                            </div>
                        </li>

                        <li>
                            <a className="all_messages" href="">
                                <strong className="uni_text_6d30ab">View All</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default ButtonNotify;
