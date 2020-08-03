import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class TextField extends Component {
    render() {
        return (
            <div className='form-group' >
                <label className="label"><Trans>{this.props.label}</Trans></label>
                <div className="input" style={{"backgroundColor": "transparent"}}>
                    <i className={ this.props.icon }></i>
                    <input className="form-control" type={ this.props.type } placeholder="..." name={this.props.name} value={this.props.value} onChange={this.props.handleChange}/>
                </div>
                { this.props.submitted && !this.props.value && <p className="text-danger"><Trans>{this.props.label}</Trans> <Trans>required</Trans></p> }
            </div>
        );
    }
};

export default TextField;
