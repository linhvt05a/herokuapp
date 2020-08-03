import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    CardHeader, Spinner
} from '../../../components/common';
import { sysDocumentService } from "../../../services/index";
import CardInfo from './Layout/CardInfo';

class Card_content extends Component {

    render() {
        return (
            <div>
                <CardInfo metadata="true" disabled="true" data={this.props.data} submitted={this.props.submitted} handleChange={this.props.handleChange} />
                <div className="row">
                    <div className="col-12">
                        <div className="float-right ">
                            <button type="button" className="btn-uni-cancel" onClick={this.props.handleBack}>Quay Lại</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PageDocumentTypeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                'name': {}
            },
            submitted: false,
            loading: false
        };
    }

    componentDidMount() {
        this.setState(
            {
                loading: true
            },
            () => {
                sysDocumentService.documentTypeDetail(this.props.user.token, this.props.params.id).then(
                    res => {
                        let data = {
                            'name': {}
                        }
                        data['code'] = res['detail']['code']
                        let name = res['detail']['name']
                        if (name) {
                            name.map((item) => {
                                data['name'][item.language_id] = item.name;
                            })
                        }
                        this.setState({
                            loading: false,
                            data: data
                        });
                    },
                    err => {
                        this.setState({ loading: false });
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    handleChange = (name, value) => {
        let data = this.state.data;
        if (name === "name_vi") {
            data['name']['1'] = value;
        } else if (name === "name_en") {
            data['name']['2'] = value;
        } else {
            data[name] = value;
        }
        this.setState({ data: data });
    }

    handleBack = (e) => {
        window.location = '/system/document-type'
    }

    render() {
        return (
            <div>
                <CardHeader label="Document Type" />
                <Card_content handleBack={this.handleBack}
                    data={this.state.data}
                    submitted={this.state.submitted}
                    handleChange={this.handleChange} onSave={this.onSave} />
                {this.state.loading && <Spinner />}
            </div>
        )
    }
}
export default PageDocumentTypeDetail;
