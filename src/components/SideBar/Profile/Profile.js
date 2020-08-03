import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropItem } from "../../dropdown"
import { ButtonChat, ButtonSetting, ButtonNotify } from './Button'

import './Profile.css';


let messages = [
    {
        "name": "test 123",
        "content": "Nguyễn A: sent a photo",
        "url": "https://cloudapi.minerva.vn/cdn/minerva-chat/workflow/workflowprod/f188b952219aa1bb455e158997134020212"
    },
    {
        "name": "test 123",
        "content": "undefined",
        "url": "https://cloudapi.minerva.vn/cdn/minerva-chat/workflow/workflowprod/f711f0af9f34e38071f1158951062683424"
    },
    {
        "name": "test 123",
        "content": "undefined",
        "url": "https://cloudapi.minerva.vn/cdn/sunnyworld-workflow/cdc00e26696a1c429cbb4.jpg"
    }
]

class Avatar extends DropItem {
    render() {
        const { user } = this.props;
        return (
            <div className="item dropdown" ref={node => this.node = node }>
                <div className="avartar">
                    <button className="profile-pic rounded-circle position-relative" type="button" style={{"backgroundSize": "cover", "backgroundImage": "url("+user.avatar_url+")"}} >
                        <span className="badge rounded-circle badge-success profile-dd text-center uni_profile_status_online">
                            <i className="fa fa-angle-down text-white"></i>
                        </span>
                    </button>
                </div>

                <div className={ this.state.show ? "dropdown-menu show" : "dropdown-menu" }>
                    <a className="dropdown-item">
                        <i className="fa fa-circle text-muted"></i> <Trans>Offline</Trans>
                    </a>
                    <a className="dropdown-item">
                        <i className="fa fa-circle text-danger"></i> <Trans>Do not Disturb</Trans>
                    </a>
                </div>
            </div>

        )
    }
}
class Profile extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="user-profile">
                <Avatar user={user}/>

                <div className="profile">
                    <p className="name" > {user.full_name} </p>
                    <p className="position"> {user.position_name} </p>
                    <div className="actions">
                        <ButtonNotify />
                        <ButtonSetting />
                        <ButtonChat messages={messages}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
