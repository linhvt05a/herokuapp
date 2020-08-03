import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../dropdown"

class ButtonSetting extends DropItem {
    render() {
        return (
            <div className="item dropdown" ref={node => this.node = node } >
                <a>
                    <span className="edit-system">
                        <i className="las la-cog"></i>
                    </span>
                </a>
                <div className={ this.state.show ? 'dropdown-menu show' : 'dropdown-menu' } aria-labelledby="dd5" x-placement="bottom-start" style={{"position": "absolute", "transform": "translate3d(119px, 50px, 0px)", "top": "0px", "left": "0px"}}>
                    <a className="dropdown-item" href="/profile"><Trans>Profile</Trans></a>
                    <a className="dropdown-item" href="/changepass"><Trans>Change Password</Trans></a>
                </div>
            </div>
        )
    }
}

export default ButtonSetting;
