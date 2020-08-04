import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class PageTitle extends Component {
    constructor() {
        super();
        this.state = {
            pages: []
        }
    }

    componentWillMount() {
        var pages = [];
        var active = false;
        var href = this.props.location.pathname;
        console.log(href);
        var pos = href.length;
        if (pos > 1) {
            do {
                var href = href.substring(0, pos);
                if (href in this.props.PATHS) {
                    pages.unshift({ 'label': this.props.PATHS[href], 'href': href, 'active': active })
                }
                active = true;
                var pos = href.lastIndexOf("/");
            } while (pos > 1);
        }

        pages.unshift({ 'label': 'Home', 'href': '/', 'active': active })
        this.setState({ "pages": pages });
    }

    render() {
        var length = this.state.pages.length - 1;
        return (
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                        <h3 className="page-title text-truncate m_text_000 font-weight-medium"><Trans>{this.props.label}</Trans></h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 d-flex justify-content-start justify-content-sm-end mt-2 mt-sm-0 align-items-center">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {
                                    this.state.pages.map((item, index) => (
                                        index !== length ?
                                            (
                                                <li key={index} className="breadcrumb-item active" aria-current="page">
                                                    <a href={item.href}>
                                                        <Trans>{item.label}</Trans>
                                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            ) :
                                            (
                                                <li key={index} className="breadcrumb-item active" aria-current="page">
                                                    <Trans>{item.label}</Trans>
                                                </li>
                                            )
                                    ))
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageTitle;
