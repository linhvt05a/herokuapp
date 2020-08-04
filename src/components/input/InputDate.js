import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';

import "react-datepicker/dist/react-datepicker.css";

//import format from "date-fns/format"
import './InputDate.css';

import moment from 'moment'
import DatePicker from "react-datepicker";

const DATE_FORMAT = 'dd-MM-yyyy';

// Class for testing on component input date.
class InputDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ""
        };
    }

    componentDidMount (){
        if(this.props.value){
           const date = moment(this.props.value)._d
            this.setState({
                values: date
            })
        } else {
            this.setState({
                values: ""
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            if (this.props.value) {
                this.setState({
                    values: moment(this.props.value, 'yyyy-MM-dd').toDate() // Convert to date object
                })
            } else {
                this.setState({
                    values: ""
                })
            }
        }
    }

    updateInputDate(date) {
        this.setState({
            values: date,
        }, () => {
            if (this.props.onChange) {
                // Convert date object => date string format
                const formatDate = this.state.values && moment(this.state.values).format('dd-MM-yyyy');

                // Pass date string to parent component.
                this.props.onChange(this.props.name, formatDate);
            }

        })
    }

    handleChange = date => {
        return new Date(date) && this.updateInputDate(date);
    };

    render() {
        const { t } = this.props;
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <div className="form-group">
                    {
                        this.props.label &&
                        <label className={this.props.classLabel ? this.props.classLabel : "fw-medium"} >
                            <Trans>{this.props.label}</Trans>
                            {
                                this.props.required &&
                                <span className="uni_star_e94c4c"> (*)</span>
                            }
                        </label>
                    }
                    <div className="m_datepicker">
                        <DatePicker
                            className={this.props.classValue ? this.props.classValue : "form-control js-datepicker"}
                            dateFormat= {DATE_FORMAT}
                            placeholderText={this.props.label}
                            selected={this.state.values}
                            onChange={this.handleChange}
                            disabled={this.props.disabled}
                            popperClassName="date-custom-class"
                            popperPlacement="top-end"
                        />
                    </div>
                    {(!this.props.disabled && this.props.submitted && this.props.required && (this.state.values === "")) &&
                        <ul className="parsley-errors-list filled">
                            <li className="parsley-required"><Trans i18nKey="Missing">{{ value: t(this.props.label) }}</Trans></li>
                        </ul>}
                </div>
            </div>
        )
    }
}


export default withTranslation()(InputDate);
