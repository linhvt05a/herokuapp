import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { Pagination, CardHeader, Spinner } from '../../../components/common';
import { sysDocumentService } from "../../../services/index";
import api from '../../../services/api';


class DocumentType extends Component {
    render() {
        const { data } = this.props;
        let hrefEdit = "/system/document-type/edit/" + data.id;
        let hrefDetail = "/system/document-type/detail/" + data.id;

        return (
            <tr>
                <td className="align-middle" width="3%">{this.props.index + 1}</td>
                <td className="align-middle uni_text_black  font-weight-bold" width="15%" >{data.code}</td>
                <td className="code cl-title align-middle" width="35%">{data.name[1]}</td>
                <td className="code cl-title align-middle" width="35%">{data.name[2]}</td>
                <td className="text-center">
                    {/* <a href={hrefEdit}><i style={{ "color": "#399b54" }} className="las la-edit uni_action"></i></a>
                    <a href={hrefDetail}><i style={{ "color": "#426fe9" }} data={this.props.data} className="lar la-eye uni_action"></i></a> */}
                    <a title="Edit" href={hrefEdit}><i style={{color: '#399b54'}} className="las la-edit uni_action" /></a>
                    <a title="Detail" href={hrefDetail}><i style={{color: '#426fe9'}} data={this.props.data} className="lar la-eye uni_action" /></a>
                </td>
            </tr>
        )
    }
};


class Card_content extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let pageSize = this.props.page * api.LIMIT - api.LIMIT
        return (
            <div className="card square">
                <div className="card-body">
                    <div className="m_table m_table--list_project mt-3" style={{ maxHeight: "100%" }}>
                        {
                            this.props.datas ?
                            (
                                <>
                                    <table className="table" style={{ minWidth: "auto" }}>
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase "><Trans>No.</Trans></th>
                                                <th className="text-uppercase "><Trans>Code</Trans></th>
                                                <th className="text-uppercase "><Trans>vi</Trans></th>
                                                <th className="text-uppercase "><Trans>en</Trans></th>
                                                <th className="text-uppercase  text-center"><Trans>Actions</Trans></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.datas.map((item, index) => <DocumentType key={index} index={index + pageSize} data={item} />)
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.props.changePage} /> :
                                </>

                            ) :
                            (
                                <Spinner />
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}

class PageDocumentType extends Component {
    constructor() {
        super();
        this.state = {
            datas: null,
            total_page: 0,
            total_record: 0,
            service: '',
            time_convert: '',
            page: 1
        };
    }
    onSearch = (value) => {
        if (value.trim() != "") {
            window.location = "?search=" + value;
        } else {
            window.location = "/system/document-type"
        }
    }
    changePage=(page)=> {
        let search = this.props.search.search ? "search=" + this.props.search.search + "&" : ""
        window.location = "?" + search + "page=" + page;
    }
    componentDidMount() {
        const page = this.props.search.page ? this.props.search.page : 1;
        const search = this.props.search.search ? this.props.search.search : "";
        this.setState(
            {
                page: page,
            },
            () => {
                sysDocumentService.documentTypeList(this.props.user.token, search, this.state.page).then(
                    res => {
                        this.setState({
                            loading: false,
                            datas: res["detail"]["document_type"],
                            total_page: res["total_page"],
                            total_record: res["total_record"],
                            page: res["page"],
                        });
                        this.forceUpdate();
                    },
                    err => {
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    render() {
        const actions = [
            { "href": "/system/document-type/add", "value": "Add" },
        ]
        return (
            <div>
                <CardHeader label="Document Type" searchLabel="Search" actionData={actions} onSearch={this.onSearch}   searchHolder="Name document type"/>
                {this.state.datas && 
                    <Card_content
                    datas={this.state.datas}
                    total_page={this.state.total_page}
                    total_record={this.state.total_record}
                    page={this.state.page}
                    changePage = {this.changePage}
                />
                }
            </div>
        )
    }
}


export default PageDocumentType;
