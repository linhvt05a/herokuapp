import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import queryString from 'query-string';

import { PageHeader, PageFooter, PageTitle } from '../components/common'

import SideBar from '../components/SideBar/SideBar.js'

import menu from './menu.js';

import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';

function showToast(type, message) {
    switch (type) {
        case 'info':
            NotificationManager.info(message, 'Minerva');
            break;
        case 'success':
            NotificationManager.success(message, 'Minerva');
            break;
        case 'warning':
            NotificationManager.warning(message, 'Minerva', 3000);
            break;
        case 'error':
            NotificationManager.error(message, 'Minerva', 5000);
            break;
        default: break;
    }
}

//NotificationContainer
//this.props.showToast('error', err);
function isEmpty(obj) {
    if( obj && Object.keys(obj).length > 0){
        return false;
    }
    return true;
}

function updateLocation(new_params){
    var cur_params = queryString.parse(window.location.search);
    for( var key in new_params ){
        if( new_params[key] != null ){
            cur_params[key] = new_params[key]
        }
        else{
            delete cur_params[key]
        }
    }
    var url = window.location.pathname;
    if( !isEmpty(cur_params) ){
        url = url + "?" + new URLSearchParams(cur_params).toString();
    }
    window.location = url;
}

class MainPage extends Component {
    constructor() {
        super();

        const data = localStorage.getItem('user');
        if( !data ){
            window.location = "/login";
        }

        this.state = {
            user: JSON.parse(data),
            search: {},
            title: null,
            menu: null,
            page: null,
        };
    }

    update = (e) => {
        this.forceUpdate();
    }

    componentWillMount(){
        let search = queryString.parse(this.props.location.search);
        this.setState(
            {
                search: search ,
                title: this.props.data.title,
                menu: this.props.data.menu,
                page: this.props.data.value,
            }
        );
    }

    updateTitle = (value) => {
        this.setState(
            {
                title: value
            }, () => {
                this.forceUpdate();
            }
        )
    }

    setActiveItemMenu = (activeItem) => {
        this.setState(
            {
                menu: activeItem,
            }
        );
    }

    render() {
        // console.log('menu', this.state.menu);
        if( this.state.page == null ){
            return <div></div>
        }
        const { user, search } = this.state;
        const { params } = this.props.match;
        return (
            <div className="main-wrapper">
                <NotificationContainer />
                <div className="header__bg purple" />
                <PageHeader user={user} update={this.update}/>
                <SideBar user={user} 
                         menudata={menu.datas}
                         active={this.state.menu}
                         setItemActive={this.setActiveItemMenu}
                />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <PageTitle label={this.state.title} location={this.props.location} PATHS={this.props.PATHS} />
                        {
                            <this.state.page user={user} 
                                             search={search} 
                                             params={params} 
                                             updateTitle={this.updateTitle} 
                                             updateLocation={updateLocation} 
                                             showToast={showToast}
                                             setActiveItemMenu={this.setActiveItemMenu}
                            />
                        }
                    </div>
                    <PageFooter/>
                </div>
            </div>
        )
    }
}

export default MainPage;
