import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import Select from 'react-select';

const customStyles = {
    control: (base, state) => ({
        ...base,
        borderRadius: 'none',
        minHeight: '40px',
        // height: '40px',
        color: '#999'
    }),

    valueContainer: (base, state) => ({
        ...base,
        minHeight: '40px',
        // overflow : 'auto'
    }),

    input: (base, state) => ({
        ...base,
        position: 'absolute',
        marginTop: '0',
        paddingBottom: '0',
        paddingTop: '0',
    }),

    placeholder: (base, state) => ({
        ...base,
        position: 'absolute'
    }),

    indicatorSeparator: (base, state) => ({
        ...base,
        display: 'none'
    }),
    menu: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        border: '1px solid #aaa',
        borderRadius: 'none',
        boxSizing: 'border-box',
        display: 'block',
        position: 'absolute',
        width: '100%',
        zIndex: '1051',
        borderTop: '0',
        top: '32px'
    }),
    clearIndicator: (base, state) => ({
        ...base,
        display: 'none'
    }),
    multiValue: (base, state) => ({
        ...base,
        backgroundColor: "rgba(109, 48, 170, 0.2)"
    })

};



class InputSelect extends Component {
    constructor() {
        super();
        this.state = {
            options: [],
            value: null
        };
    }

    componentDidMount() {
        this.setState({
            options: (this.props.options ? this.props.options : []),
            value: (this.props.value ? this.props.value : null)
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value || (prevProps.options !== this.props.options)) {
            this.setState({
                options: (this.props.options ? this.props.options : []),
                value: (this.props.value ? this.props.value : null)
            });
        }
    }

    handleInputValidation = event => {
        const { isInputValid, errorMessage, number } = Validate.validateInput(this.state.value, this.props);
        this.setState({
            number: number,
            isInputValid: isInputValid,
            errorMessage: errorMessage
        })
    }

    handleChange = e => {
        if (e) {
            var value = JSON.stringify(e.value)
            if (this.props.onChange) {
                this.props.onChange(this.props.name, e, value);
            }
        } else {
            if (this.props.onChange) {
                this.props.onChange(this.props.name, null, null);
            }
        }
    };

    convertOptions = () => {
        const { t } = this.props;
        var options = this.props.options
        var result = []
        for (var i = 0; i < options.length; i++) {
            var label = t(options[i].label)
            result.push({
                value: options[i].value,
                label: label
            })
        }
        return result
    }
    render() {
        const { t } = this.props;
        return (
            <div className={this.props.className ? this.props.className : ''} style={this.props.style}>
                <div className="form-group">
                    {
                        this.props.label &&
                        <label className={this.props.classLabel ? this.props.classLabel : "fw-medium"} >
                            {t(this.props.label)}
                            {
                                this.props.required &&
                                <span className="uni_star_e94c4c"> *</span>
                            }
                        </label>
                    }
                    <Select
                        isDisabled={this.props.disabled ? this.props.disabled : false}
                        onChange={this.handleChange}
                        value={this.props.value}
                        options={this.props.options}
                        styles={this.props.style ? this.props.style : customStyles}
                        placeholder={t(this.props.label)}
                        isMulti={this.props.isMulti}
                    />
                    {(!this.props.disabled && this.props.submitted && this.props.required && this.props.value.value === "") &&
                        <ul className="parsley-errors-list filled">
                            <li className="parsley-required"><Trans i18nKey="Missing">{{ value: t(this.props.label) }}</Trans></li>
                        </ul>}
                </div>
            </div>
        )
    }
}

export default withTranslation()(InputSelect);

