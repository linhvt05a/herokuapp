import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import Select from 'react-select';
import Validate from "validator"
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
        for (var i = 0;i < options.length;i++) {
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
            <div className={className ? className : ''}>
                <div className="form-group">
                    {
                        label &&
                        <label className="fw-medium">
                            <Trans>{label}</Trans>
                        </label>
                    }
                    <Select
                        showSearch
                        value={value}
                        className="form-control"
                        placeholder={placeholder}
                        onChange={onChange}>
                        {
                            datas && datas.map((item, key) => {
                                <Option className="abc" value={item.value} key={key}>{item.label}</Option>
                            })
                        }
                    </Select>
                </div>
            </div>
        )
    }

    export default InputSelect;

