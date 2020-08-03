import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';
import {
  project_period
} from '../../../../constant';

import { InputText, InputSelect, InputDate, InputCheckBox } from '../../../../components/input/index';
import { mapping } from '../../../../components/input';
class CardInfo extends Component {
  test = () => {
    console.log(this.props)
  }
  render() {
    const { submitted, disabled, data } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h6 className="text-uppercase uni_text_6d30ab " onClick={this.test}><Trans>information</Trans> </h6>
          </div>
        </div>

        <div className="row mt-2">
          <InputSelect className="col-xl-6 col-lg-6 col-md-12 col-sm-12" label="Project Period" name="project_period_id"
            submitted={submitted} value={mapping(this.props.list, data.project_period_id)} options={this.props.list}
            onChange={this.props.handleChange} required />

          <InputText className="col-xl-6 col-lg-6 col-md-12 col-sm-12" disabled={disabled} classValue="form-control"
            isEmpty submitted={submitted} required value={data.version} label="version" name="version" type="number" onChange={this.props.handleChange} />
        </div>
        <div className="row">
          <InputText className="col-xl-6 col-lg-6 col-md-12 col-sm-12" classLabel="fw-medium" classValue="form-control"
            submitted={submitted} required isEmpty value={data.name_vi} label="Name (Vietnamese)" name="name_vi" onChange={this.props.handleChange} />
          <InputText className="col-xl-6 col-lg-6 col-md-12 col-sm-12" classLabel="fw-medium" classValue="form-control"
            submitted={submitted} required isEmpty value={data.name_en} label="Name (English)" name="name_en" onChange={this.props.handleChange} />
        </div>

        <div className="row">
          <InputText className="col-xl-6 col-lg-6 col-md-12 col-sm-12" classLabel="fw-medium" classValue="form-control"
            submitted={submitted} required isEmpty value={data.number_no} type="number" label="number_no" name="number_no" onChange={this.props.handleChange} />
          <InputDate className="col-xl-6 col-lg-6 col-md-12 col-sm-12" required submitted={submitted} label="date_issued" name="date_issued" value={data.date_issued} onChange={this.props.handleChange} />
        </div>
        <div className="row">
          <InputText className="col-xl-6 col-lg-6 col-md-12 col-sm-12" classLabel="fw-medium" classValue="form-control"
            submitted={submitted} required isEmpty value={data.approval_user} label="approval_user" name="approval_user" type="text" onChange={this.props.handleChange} />
          <div className="col-6">
            <InputCheckBox title=" " onChange={this.props.handleChange} classLabel="custom-control-label mt-0 fw-medium" classCheckBox="custom-control-input" style={{ marginTop: "12px" }}
              label="Activated status" value={data.active_flag} name="active_flag" />
          </div>
        </div>
      </div>
    )
  }
}
export default CardInfo;