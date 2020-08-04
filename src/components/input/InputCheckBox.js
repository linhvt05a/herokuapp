import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class InputCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
    }
    componentDidMount(){
        this.setState({
            value: this.props.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value || prevProps.value !== this.state.value) {
            this.setState({
                value: this.props.value
            })
        }
    }
    handleChange = e => {
        this.setState({
            value: !this.state.value
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.props.name, this.state.value)
            }
        })
    }

    render() {
        return (
            <div className={this.props.className ? this.props.className : "form-group"}>
                <div className="custom-control custom-checkbox" onClick={this.handleChange} style={this.props.style}>
                    {
                        this.props.title &&
                        <div>
                            <label style={{ position: "relative", right: "24px" }}>
                                {this.props.title}
                            </label>
                        </div>
                    }
                    <input type="checkbox" className={this.props.classCheckBox ? this.props.classCheckBox : "custom-control-input checkbox-item"}
                        name={this.props.name}
                        checked={this.state.value}
                    />
                    <label className={this.props.classLabel ? this.props.classLabel : "custom-control-label "} >
                        <Trans>{this.props.label}</Trans>
                    </label>
                </div>
            </div>
        )
    }
}


export default InputCheckBox
