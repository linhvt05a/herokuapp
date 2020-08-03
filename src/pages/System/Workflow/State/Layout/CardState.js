import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';
import { InputText, InputSelect, InputDate, InputCheckBox, mapping } from '../../../../../components/input/index';
class CardDepartmentApproved extends Component {
    render() {
        return (
            <div className="row" style={{ marginLeft: '20px' }}>
                <div className="col-12" id="check_condition_department">
                    {
                        this.props.data ? this.props.data.map((item) =>
                            <p class="checkbox-department"> <i class="fa fa-check-square-o square success mr-1" />{item.label}</p>) : ""
                    }
                </div>
            </div>
        )
    }
}
class CardState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'none_department'
        }
    }
    componentDidUpdate() {
        if (this.props.data.state_condition != this.state.state_condition) {
            this.setState({
                state_condition: this.props.data.state_condition,
                selectedOption: this.props.data.state_condition === true ? 'all_department' : 'none_department'
            })
        }
    }
    handleOptionChange = (changeEvent) => {
        this.props.onChange('state_condition', changeEvent.target.value === 'all_department')
    }
    render() {
        const { data } = this.props
        return (
            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 pr-4 border-right-md-none border-right">
                <div className="row">
                    <div className="col-12">
                        <h5 className="uni_text_51c471 text-uppercase" style={{ paddingLeft: 0 }}><Trans>Steps for the workflow</Trans></h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="form-group">
                            <label className="label_checkbox js_checkbox fw-medium  active ">
                                <input className="styled-checkbox" type="checkbox" name="customCheckRight" id="customCheckRight1" disabled defaultChecked="checked" />Start
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <InputText className="col-12" isEmpty label="Name (Tiếng Việt)" value={data.state_name_vi} name="state_name_vi" onChange={this.props.onChange} />
                </div>
                <div className="row">
                    <InputText className="col-12" isEmpty label="Name (English)" value={data.state_name_en} name="state_name_en" onChange={this.props.onChange} />
                </div>
                {
                    this.props.parentStates &&
                    <div className="row">
                        <InputSelect className="col-12" label="Parent State" value={mapping(this.props.parentStates, data.parent_id)} options={this.props.parentStates} name="parent_id" onChange={this.props.onChange} />
                    </div>
                }
                <div className="row">
                    <InputSelect className="col-12" label="Department" isMulti value={data.departments} options={this.props.departments} name="departments" onChange={this.props.onChange} />
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <span><Trans>Transition Conditions Through The Next Step.</Trans></span>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="none_department" checked={this.state.selectedOption === 'none_department'} onChange={this.handleOptionChange} />
                            <label className="form-check-label" htmlFor="none_department" style={{ position: 'relative' }}><Trans>Optional</Trans></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="all_department" checked={this.state.selectedOption === 'all_department'} onChange={this.handleOptionChange} />
                            <label className="form-check-label" htmlFor="all_department" style={{ position: 'relative' }}><Trans>Require all departments to approve</Trans></label>
                        </div>
                    </div>
                </div>
                {this.state.selectedOption === 'all_department' && <div className="row mt-2 mb-2">
                    <div className="col-12" id="list_departments_approved">
                        <h5 className="uni_text_51c471 text-uppercase" style={{ paddingLeft: 0 }}><Trans>List of departments to be approved</Trans></h5>
                    </div>
                </div>}
                {this.state.selectedOption === 'all_department' && <CardDepartmentApproved data={data.departments} />}
            </div>
        );
    }
}
export default CardState;