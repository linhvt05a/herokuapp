import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { PageLogin, PageForgot } from './Login';

class Welcome extends Component {
    render() {
        return (
            <div className="m_login--left">
                <figure className="m_login--logo" >
                    <img src="/static/images/logo_full_name.svg" alt="Minerva" />
                </figure>
                <div className="content" style={{border: "0px" }}>
                    <p className="main-title"><Trans>{this.props.main_title}</Trans></p>
                    <p className="sub-title"><Trans>{this.props.sub_title}</Trans></p>
                </div>
            </div>
        )
    }
}

class MainLogin extends Component {

    render() {
        return (
            <div className="vertical-layout vertical-menu-modern 1-column  bg-full-screen-image menu-expanded blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="m_login m_bg_purple">
                            <Welcome main_title={this.props.data.main_title} sub_title={this.props.data.sub_title} />
                            { <this.props.data.value /> }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default MainLogin;
