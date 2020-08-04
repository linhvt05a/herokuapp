import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../../dropdown"

class ButtonSetting extends DropItem {
    render() {
        return (

            <div className="item dropdown" ref={node => this.node = node }>
                <a className="actions_item">
                    <i className="icon las la-cog" />
                </a>
                <div className={ this.state.show ? 'dropdown-menu setting pt-1 pb-1 show' : 'dropdown-menu setting pt-1 pb-1' }>
                    <a className="dropdown-item pb-2" href="#">
                        <i className="las la-user-alt uni_text_6d30ab mr-2 fs-17" />
                        <Trans>Profile</Trans>
                    </a>
                    <a className="dropdown-item pb-2" href="#">
                        <i className="las la-bell uni_text_6d30ab mr-2 fs-17" />
                        <Trans>Notification</Trans>
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="las la-exclamation-circle uni_text_6d30ab mr-2 fs-17" />
                        <Trans>Change Password</Trans>
                    </a>
                </div>
            </div>
        )
    }
}

export default ButtonSetting;
