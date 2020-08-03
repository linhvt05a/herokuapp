import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className="card-footer bg-transparent">
                <div className="row">
                    <p className="text-muted text-center col-12 pb-1">Copyright © 2020 Minerva</p>
                </div>
            </div>
        )
    }
}

class Error extends Component {
    render() {
        return (
            <div className="vertical-center">
                <div className="container">
                    <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 col-10 p-0">
                                    <div className="card-header bg-transparent border-0">
                                        <h1 className="error-code text-center mb-2" >{this.props.code}</h1>
                                        <h4 className="text-uppercase text-center">{this.props.description}</h4>
                                    </div>
                                    <Copyright/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error;
