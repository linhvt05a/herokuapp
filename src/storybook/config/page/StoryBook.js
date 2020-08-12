import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import queryString from 'query-string';

import { PageHeader, PageFooter, PageTitle } from '../../../components/common'

import SideBar from '../../../components/SideBar/SideBar.js'

import menu from './menu.js';

import { useLocation } from "react-router-dom"

function isEmpty(obj) {
    if (obj && Object.keys(obj).length > 0) {
        return false;
    }
    return true;
}

function updateLocation(new_params) {
    var cur_params = queryString.parse(window.location.search);
    for (var key in new_params) {
        if (new_params[key] != null) {
            cur_params[key] = new_params[key]
        }
        else {
            delete cur_params[key]
        }
    }
    var url = window.location.pathname;
    if (!isEmpty(cur_params)) {
        url = url + "?" + new URLSearchParams(cur_params).toString();
    }
    window.location = url;
}

class StoryBook extends Component {
    constructor() {
        super();
        const data = localStorage.getItem('user');
        if (!data) {
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

    componentWillMount() {
        let search = queryString.parse(this.props.location.search);
        this.setState(
            {
                search: search,
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
        if (this.state.page == null) {
            return <div></div>
        }
        // let location = useLocation()
        console.log("useLocation", this.props.data.path.indexOf("storybook"));

        const { user, search } = this.state;
        const { params } = this.props.match;
        if (this.props.data.path.indexOf("storybook") !== -1) {
            return (
                <div className="main-wrapper">
                    <div className="header__bg purple"></div>
                    <PageHeader user={user} update={this.update} />
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
                                    setActiveItemMenu={this.setActiveItemMenu}
                                    active={this.state.menu}
                                />
                            }
                        </div>
                        <PageFooter />
                    </div>
                </div>
            )
        }
        else return <div></div>

    }
}

export default StoryBook;
