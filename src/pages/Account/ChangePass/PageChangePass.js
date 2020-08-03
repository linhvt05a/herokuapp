import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { InputText } from '../../../components/input'
import { CardHeader } from '../../../components/common'
import { userService } from '../../../services';

class PageChangePass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            old_password: '',
            new_password: '',
            confirm_password: '',
            loading: false
        };
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        const { old_password, new_password, confirm_password } = this.state;

        // stop here if form is invalid
        if (!(old_password && new_password && confirm_password)) {
            return;
        }
        if (new_password != confirm_password) {
            return;
        }

        userService.changePass(this.props.user.token, old_password, new_password, confirm_password)
            .then(
                info => {
                    this.setState({ loading: false });
                    localStorage.setItem('user', null);
                    this.props.history.push('/login');
                },
                error => {
                    this.setState({ loading: false })
                }
            );
    }

    render() {
        const { old_password, new_password, confirm_password, loading } = this.state;
        return (
            <div className="row">
                <div className="col-lg-12 ">
                    <CardHeader label="changpassword" />
                    <div className="card square">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 mb-2">
                                    <i className="help">
                                        <small style={{ "fontSize": "13px" }} className="uni_star_e94c4c">
                                            <Trans>changepassword_desc</Trans>
                                        </small>
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="row mt-2">
                                    <InputText isEmpty className="col-lg-4 col-md-6 col-sm-12" name="old_password" label="old_password" value={old_password} handleChange={this.handleChange} danger="danger_empty" />
                                    <InputText isEmpty minLength={6} className="col-lg-4 col-md-6 col-sm-12" name="new_password" label="new_password" value={new_password} handleChange={this.handleChange} danger="danger_empty" />
                                    <InputText isEmpty minLength={6} sameValue={new_password} sameName="new_password" className="col-lg-4 col-md-6 col-sm-12" name="confirm_password" label="confirm_password" value={confirm_password} handleChange={this.handleChange} danger="danger_empty" />
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 text-right">
                                        <button type="button" className="btn-uni-purple" id="btn-save" onClick={this.handleSubmit} ><Trans>save</Trans></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageChangePass;
