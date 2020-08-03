import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { InputText, InputSelect, mapping, mappingWithList } from '../../../../../components/input/index';

class DeparmentCheck extends Component {
    render() {
        return (
            <p className="checkbox-department" id="department_9" checked="false" >
                <i className="fa fa-check-square-o square success mr-1"></i>{this.props.data.name}
            </p>
        )
    }
}
class CardDeparment extends Component {
    render() {
        return (
            <div>
                <div className="row mt-2 mb-2">
                    <div className="col-12" id="list_departments_approved">
                        <h5 className="uni_text_51c471 text-uppercase"><Trans>List of departments to be approved</Trans></h5>
                    </div>
                </div>
                <div className="row" style={{ marginLeft: "20px" }}>
                    <div className="col-12" id="check_department">
                        {
                            this.props.datas && this.props.datas.map((item) => <DeparmentCheck data={item} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequire: false,
        }
    }
    onSelectedCheckbox = (e) => {
        this.state = {
            isRequire: e.name === "require"
        }
    }

  
    handleChangeRadio = (event) => {
        const {
            target: { value, name }
        } = event;
        this.props.handleChange(name, value)
    };
    render() {
        const { data } = this.props;
        const { submitted, departments, parentStates } = this.props;
        return (
            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 pr-4 border-right-md-none border-right">
                <div className="row">
                    <div className="col-12">
                        <h5 className="uni_text_51c471 text-uppercase">Các bước cho quy trình làm việc</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="form-group">
                            <label className={data.isStart===true?"label_checkbox js_checkbox_blue fw-medium active":"label_checkbox js_checkbox_blue fw-medium "}>
                                Bắt Đầu
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <InputText className="col-12 "
                        classLabel="fw-medium"
                        classValue="form-control"
                        submitted={submitted} required="true"
                        value={data.name_vi} label="Name (Vietnamese)"
                        name="name_vi" type="text" onChange={this.props.handleChange}
                    />
                </div>

                <div className="row">
                    <InputText className="col-12 "
                        classLabel="fw-medium"
                        classValue="form-control"
                        submitted={submitted} required="true"
                        value={data.name_en} label="Name (English)"
                        name="name_en" type="text" onChange={this.props.handleChange}
                    />
                </div>
                <div className="row">
                    <InputSelect className="col-12 "
                        label="Parent State"
                        name="parent_state"
                        value={mapping(parentStates, data.parentId)}
                        options={parentStates}
                        onChange={this.props.handleChange} required 
                    />
                </div>

                <div className="row">
                    <InputSelect className="col-12 "
                        label="Department"
                        name="department"
                        value={mappingWithList(departments, data.departments, "id")}
                        options={departments}
                        onChange={this.props.handleChange} required isMulti 
                    />
                </div>

                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <span><Trans>Transition Conditions Through The Next Step</Trans>.</span>
                    </div>
                    <div className="col-xl-7 className-lg-7 col-md-12 col-sm-12">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radio" id="none_department" value="0" checked={data.required === "0"} onChange={this.handleChangeRadio} />
                            <label className="form-check-label" for="none_department" style={{ position: "relative" }}><Trans>Optional</Trans></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radio" id="all_department" value="1" checked={data.required === "1"} onChange={this.handleChangeRadio} />
                            <label className="form-check-label" for="all_department" style={{ position: "relative" }}><Trans>Require all departments to approve</Trans></label>
                        </div>
                    </div>
                </div>
                {data.required === "1" && <CardDeparment datas={this.props.data.deparmentApproved}/>}
            </div>
        )
    }
}
export default CardInfo;