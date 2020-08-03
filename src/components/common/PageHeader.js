import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import i18n from '../../i18n';
import $ from "jquery";

import { DropItem } from "../dropdown"

import { userService } from '../../services';

import icon from './PageHeader.svg';

//$(".nav-toggler").on("click", function(e) {
//    e.stopPropagation();
//    $(".main-wrapper").toggleClass("show-sidebar");
//}),

// toggle
//$(".sidebartoggler").on("click", function() {
//    $(".main-wrapper").toggleClass("mini-sidebar");
//});


class ButtonLanguage extends DropItem {
    render() {
        let clsicon="icon las la-angle-down";
        if(this.state.show){
            clsicon="icon las la-angle-up"
        }
        return (
            <li className="nav-item dropdown languages" ref={node => this.node = node}>
                <a className="nav-link" id="dd5" role="button" data-toggle="dropdown" >
                    <span className="arrow">
                        {/* <img src={icon} /> */}
                        <i className={clsicon}></i>
                        <Trans>{i18n.language === "vn" ? 'lang_vi' : 'lang_en'}</Trans>
                    </span>
                </a>
                <div className={this.state.show ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"} aria-labelledby="dd5" onClick={this.props.switchLang}>
                    <a className="dropdown-item">
                        <Trans>{i18n.language === "vn" ? 'lang_en' : 'lang_vi'}</Trans>
                    </a>
                </div>
            </li>
        )
    }
}

class ButtonLogout extends Component {
    render() {
        return (
            <li className="nav-item">
                <div className="nav-link log-out">
                    <a className="arrow" href="/login">
                        <i className="la la-sign-out"></i> <Trans>logout</Trans>
                    </a>
                </div>
            </li>
        )
    }
}

class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(".left-sidebar").hover(
            function () {
                $(".navbar-header").addClass("expand-logo");
            },
            function () {
                $(".navbar-header").removeClass("expand-logo");
            }
        );
    }

    switchLang = (e) => {
        let lang = (i18n.language === "vn" ? "en" : "vn");
        let langId = (i18n.language === "vn" ? "1" : "2");
        userService.changeLanguage(this.props.user.token, langId)
            .then(
                res => {
                    i18n.changeLanguage(lang);
                    localStorage.setItem('language', lang);
                    this.props.update();
                },
                error => {  }
            );

    }

    navToggler = (e) => {
        $(".main-wrapper").toggleClass("show-sidebar");
    }

    barToggler = (e) => {
        $(".main-wrapper").toggleClass("mini-sidebar");
    }

    render() {
        return (
            <div>
                <div className="header__bg purple" />
                <header className="header__topbar">
                    <nav className="navbar top-navbar navbar-expand-md navbar-dark">

                        <div className="navbar-header">
                            <a className="nav-toggler" onClick={this.navToggler}>
                                <span className="line line-1"></span>
                                <span className="line line-2"></span>
                                <span className="line line-3"></span>
                            </a>
                            <a className="nav-more">
                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </a>
                            <div className="navbar-brand">
                                <a className="logo" href="/">
                                    <b className="logo-icon">
                                        <img src="/static/img/icon_logo.png" alt="homepage" className="dark-logo" />
                                    </b>
                                    <span className="logo-text">
                                        <img src="/static/img/letter_logo.png" alt="homepage" className="dark-logo" />
                                    </span>
                                </a>
                                <a className="sidebartoggler" onClick={this.barToggler}>
                                    <span className="line line-1"></span>
                                    <span className="line line-2"></span>
                                    <span className="line line-3"></span>
                                </a>
                            </div>
                            <a className="topbartoggler d-block d-md-none waves-effect waves-light" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="ti-more"></i>
                            </a>
                        </div>

                        <div className="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav"></ul>
                            <ul className="navbar-nav">
                                <ButtonLanguage switchLang={this.switchLang} />
                                <ButtonLogout />
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
};

export default PageHeader;
