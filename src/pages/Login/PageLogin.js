import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";

import TextField from './TextField.js';

import { userService } from '../../services';

class PageLogin extends Component {
    constructor(props){
        super(props);

        userService.logout();

        this.state = {
            username: 'tgd',
            password: '123',
            submitted: false,
            loading: false,
            login: false,
            error: ''
        };

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login( username, password ).then(
            user => this.setState({ login: true, loading: false }),
            error => this.setState({ error, loading: false })
        );
    }

    render() {
        if (this.state.login) {
            return <Redirect to='/'/>;
        }

        const { username, password, submitted, loading, error } = this.state;
        return (
            <form className="m_login--right" name="form" onSubmit={this.handleSubmit}>
                <p className="main-title">
                    <Trans>login_title</Trans>
                </p>
                <div className="m_login--form">

                    <TextField submitted={submitted} value={username} label="username" icon="la la-user" name="username" type="text" handleChange={this.handleChange}/>
                    <TextField submitted={submitted} value={password} label="password" icon="la la-lock" name="password" type="password" handleChange={this.handleChange}/>
                    <a href="/forgot" className="forgot-pwd" ><Trans>forgotpass</Trans></a>
                    {
                        loading ?
                        ( <center><ClipLoader size={32} color={"#6d30ab"} /></center> ):
                        ( <button className="btn btn-login" disabled={loading}><Trans>login</Trans></button> )
                    }
                    <br/><br/>
                    { error && <div className={'alert alert-danger'}>{error}</div> }

                </div>
            </form>
        )
    }
}

export default PageLogin;
