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
                        <i className="la la-sign-out"></i> <Trans>Đăng xuất</Trans>
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
                                        <img src="/static/images/logo_full_name.svg" alt="Minerva" className="dark-logo" />
                                    </b>
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
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown ">
                                    <a className="nav-link " href="javascript:void(0) " id="dd3 " role="button " data-toggle="dropdown " aria-haspopup="true " aria-expanded="false ">
                                        <span className="arrow ">
                                            Select a project
                                            <svg xmlns="http://www.w3.org/2000/svg " width="24 " height="24 " viewBox="0 0 24 24 "
                                                fill="none " stroke="currentColor " stroke-width="2 " stroke-linecap="round "
                                                stroke-linejoin="round " className="feather feather-chevron-down svg-icon ">
                                                <polyline points="6 9 12 15 18 9 "></polyline>
                                            </svg>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu ">
                                        <div className="row no-gutters ">
                                            <div>
                                                <a className="dropdown-item w-100 text-truncate " href="inbox-email.html "><i
                                                        className="ti-email "></i><span>Email</span> </a>
                                                <a className="dropdown-item w-100 text-truncate " href="inbox-email-detail.html "><i
                                                        className="icon-envelope-open "></i><span>Email
                                                        Details</span></a>
                                                <a className="dropdown-item w-100 text-truncate " href="inbox-email-compose.html "><i
                                                        className="ti-pencil-alt "></i><span>Email Compose</span></a>
                                            </div>
                                            <div>
                                                <a className="dropdown-item w-100 text-truncate " href="ticket-list.html "><i
                                                        className="ti-bookmark "></i><span>Ticket List</span></a>
                                                <a className="dropdown-item w-100 text-truncate " href="ticket-detail.html "><i
                                                        className="ti-bookmark-alt "></i><span>Ticket Details</span></a>
                                                <a className="dropdown-item w-100 text-truncate " href="app-taskboard.html "><i
                                                        className="icon-notebook "></i><span>Taskboard</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <ButtonLanguage switchLang={this.switchLang} />
                                <ButtonLogout />
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
};

export default PageHeader;
