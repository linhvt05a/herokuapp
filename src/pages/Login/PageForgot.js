import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";

import TextField from './TextField.js';
import { userService } from '../../services';

class PageForgot extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            submitted: false,
            loading: false,
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
        const { email, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(email)) {
            return;
        }

        this.setState({ loading: true });
        this.props.history.push('/login');
    }

    render() {
        const { email, submitted, loading, error } = this.state;
        return(
            <form className="m_login--right" name="form" onSubmit={this.handleSubmit}>
                <p className="main-title">
                    <Trans>forgot_title</Trans>
                    <span className="sub-title">
                        <Trans>forgot_title_desc</Trans>
                    </span>
                </p>
                <div className="m_login--form">
                    <TextField submitted={submitted} value={email} label="email" icon="la la-envelope" name="email" type="email" handleChange={this.handleChange}/>
                    {
                        loading ?
                        ( <center><ClipLoader size={32} color={"#6d30ab"} /></center> ):
                        ( <button className="btn btn-login" disabled={loading}> <Trans>send</Trans> </button> )
                    }
                    <br/><br/>
                    { error && <div className={'alert alert-danger'}>{error}</div> }

                </div>
            </form>
        )
    }
}

export default PageForgot;
