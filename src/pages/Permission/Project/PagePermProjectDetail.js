import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    CardHeader
} from '../../../components/common'

import { CardRole } from './Layout'
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

                    <button type="button" id="btn-save" className="btn-uni-purple float-right _save_employee" onClick={this.props.onUpdate}>
                        <Trans>Update</Trans>
                    </button>
                    <a type="button" className="btn-uni-cancel  square transparent float-right uni-box-shadow black mr-3 " href="/perm/project"><Trans>Back</Trans></a>
                </div>
            </div>
        )
    }
}

class PagePermProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null
        }
    }

    onChange = (name, value) => {
        let data = this.state.data;
        data[name] = value
        console.log(data)
        this.setState({
            data: data
        })
    }

    onUpdate = () => {
        this.setState({ submitted: true })
        var data = this.state.data
        if (!(data.perm_project_task_name )) {
            return
        }
        this.setState(
            {
                loading: true,
            },
            () => {
                permissionProjectService.permission_update(this.props.user.token, this.state.data).then(
                    res => {
                        this.setState({ loading: false });
                        this.props.showToast('success', res['detail']);
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    componentDidMount() {
        this.setState({
            loading: true
        },
            () => {
                permissionProjectService.permission_detail(this.props.user.token, this.props.params.id).then(
                    res => {
                        this.setState(
                            {
                                loading: false,
                                data: res['detail'],
                            }
                        );
                        this.forceUpdate();
                    },
                    err => {
                        this.props.showToast('error', err);
                    }
                )
            }
        )
    }

    render() {
        return (
            <div>
                <CardHeader label={<Trans>UPDATE</Trans>} />
                <CardRole data={this.state.data} onChange={this.onChange} token={this.props.user.token} submitted={this.state.submitted}/>
                <Card_Button onUpdate={this.onUpdate} />
            </div>
        )
    }
}

export default PagePermProjectDetail;
