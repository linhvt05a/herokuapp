import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../dropdown"

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
                <a>
                    <span className="bell-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell svg-icon op-7">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span className="badge rounded-circle">0</span>
                    </span>
                </a>
                <div className={ this.state.show ? 'dropdown-menu mailbox show' : 'dropdown-menu mailbox' } x-placement="bottom-start" style={{"position": "absolute", "transform": "translate3d(33px, 50px, 0px)", "top": "0px", "left": "0px"}}>
                    <ul className="list-style-none">
                        <li>
                            <div className="drop-title">
                                <h5 className="title uni_text_6d30ab ml-2"><Trans>Notification</Trans></h5>
                            </div>
                        </li>
                        <li>
                            <a className="all_messages" href="/notification">
                                <strong className="uni_text_6d30ab"><Trans>View</Trans></strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default ButtonNotify;
