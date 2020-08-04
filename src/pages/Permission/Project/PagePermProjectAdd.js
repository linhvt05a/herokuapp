import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { CardRole } from './Layout'
import { CardHeader, Spinner, Loading } from '../../../components/common'
import { permissionProjectService } from '../../../services';

class Card_Button extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    {
                        this.props.classDelete &&
                        <button type="button" id="btn-delete" className={this.props.classDelete}>
                            <Trans>Delete</Trans>
                        </button>
                    }

                    <button type="button" id="btn-save" className="btn-uni-purple float-right _save_employee" onClick={this.props.onSubmit}>
                        <Trans>{this.props.label}</Trans>
                    </button>
                    <a type="button" className="btn-uni-cancel  square transparent float-right uni-box-shadow black mr-3 " href="/perm/project"><Trans>Back</Trans></a>
                </div>
            </div>
        )
    }
}

class PagePermProjectAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: false
        }
    }

    handleAdd = () => {
        this.setState({ submitted: true })
        var data = this.state.data
        if (!(data.perm_project_task_name)) {
            return
        }
        this.setState(
            {
                loading: true,
            },
            () => {
                permissionProjectService.permission_add(this.props.user.token, this.state.data).then(
                    res => {
                        this.setState({ loading: false });
                        this.props.showToast('success', res['detail']['message']);
                        window.location = "/perm/project/"
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    onChange = (name, value) => {
        let data = this.state.data;
        data[name] = value
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div>
                <CardHeader label="Create" />
                <CardRole onChange={this.onChange} token={this.props.user.token} dataAdd={this.state.data} submitted={this.state.submitted} />
                <Card_Button onSubmit={this.handleAdd} label="Add" />
            </div>
        )
    }
}

export default PagePermProjectAdd;
