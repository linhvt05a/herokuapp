import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import * as Validate from '../../validate/Validate'
class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isInputValid: true,
            errorMessage: ''
        };
    }

    componentDidMount() {
        this.setState({ value: (this.props.value ? this.props.value : '') });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value != this.props.value || prevProps.submitted != this.props.submitted) {
            this.setState({ value: (this.props.value ? this.props.value : '') });
            if (this.props.submitted) {
                this.handleInputValidation()
            }
        } else if (this.state.value != null && this.props.value != null && this.state.value != this.props.value) {
            if (this.props.type === 'number') {
                this.setState({ value: (this.props.value ? this.props.value : '') });
            }
        }
    }

    onChange = event => {
        var value = (event.target.validity.valid) ? event.target.value : this.state.value
        this.setState({ value }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.props.name, this.state.value);
            }
        });
    }

    handleInputValidation = event => {
        if (this.props.type != "number") {
            const { isInputValid, errorMessage, number } = Validate.validateInput(this.state.value, this.props);
            this.setState({
                number: number,
                isInputValid: isInputValid,
                errorMessage: errorMessage
            })
        }
        else {

        }
    }

    render() {
        const { t } = this.props;
        var pattern = this.props.type === "number" ? "[0-9]*" : null
        return (
            <div className={this.props.className ? this.props.className : ''} >
                <div className={this.props.classForm ? this.props.classForm : "form-group"}>
                    {
                        this.props.label &&
                        <label className={this.props.classLabel ? this.props.classLabel : "fw-medium"} >
                            {t(this.props.label)}
                            {
                                this.props.required &&
                                <span className="uni_star_e94c4c"> (*)</span>
                            }
                        </label>
                    }
                    {
                        this.props.classhref &&
                        <a className={this.props.classhref} style={{ textDecoration: "underline", float: "right", fontSize: "14px", fontWeight: "500" }} href={this.props.linkhref}><Trans>{this.props.titlehref}</Trans></a>
                    }
                    <input className={this.props.classValue ? this.props.classValue : "form-control square text-left text-bold-600"}
                        disabled={this.props.disabled ? "disabled" : ""}
                        type={this.props.type === "number" ? "number" : "text"}
                        pattern={pattern}
                        placeholder={this.props.placeholder ? t(this.props.placeholder) : t(this.props.label)}
                        value={this.state.value}
                        min={this.props.min}
                        max={this.props.max}
                        onBlur={this.handleInputValidation}
                        onChange={this.onChange}
                    />
                    {this.props.endLabel && <span className="input-group-text square p-0 pl-1 pr-1 h-100">{this.props.endLabel}</span>}
                    {this.state.isInputValid === false && <ul className="parsley-errors-list filled">
                        <li className="parsley-required"><Trans i18nKey={this.state.errorMessage}>{{ value: t(this.props.label), number: t(this.state.number) }}</Trans></li>
                    </ul>}
                </div>
            </div>
        )
    }
}

export default withTranslation()(InputText);

