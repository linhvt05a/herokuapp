
import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { InputText, InputSelect, mapping, mappingWithList } from '../../../../../components/input/index';
import { worktimes } from '../../../../../constant';

class Work extends Component {
    onShowDelete = e => {
        this.props.onShowDelete(this.props.data.task_id)
    }
    onChange = (name, value) => {
        this.props.onChange(this.props.data.task_id, name, value)
    }

    render() {
        const { submitted, data } = this.props;
        return (
            <div className="row content-task">
                <InputText className="col-xl-5 col-lg-12 col-md-12 col-12"
                    classLabel="fw-medium"
                    classValue="form-control text-left name_task square"
                    submitted={submitted} required isEmpty
                    value={data.task_name} label="Name"
                    name="task_name" type="text" onChange={this.onChange}
                />

                <InputText className="col-xl-3 col-lg-6 col-md-12 col-12"
                    classLabel="fw-medium"
                    classValue="form-control text-left  square estimated_duration"
                    submitted={submitted} required isEmpty
                    value={data.task_estimated_duration} label="Estimated Duration"
                    name="task_estimated_duration" type="number" onChange={this.onChange}
                />

                <InputSelect className="col-xl-3 col-lg-4 col-md-11 col-10"
                    label="Operating Unit"
                    name="task_estimated_master_timeline_unit"
                    value={mapping(worktimes, data.task_estimated_master_timeline_unit)}
                    options={worktimes}
                    onChange={this.onChange}
                />

                <div className="col-xl-1 col-lg-2 col-md-1 col-2">
                    <a onClick={this.onShowDelete}>
                        <i style={{ color: "#e94c4c", fontSize: 20, top: 35, position: "relative" }} className="uni_action las la-trash remove_customer"></i>
                    </a>
                </div>
            </div>
        )
    }
}

class CardTask extends Component {
    render() {
        return (
            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 pl-4">
                <div className="row">
                    <div className="col-12">
                        <h5 className="uni_text_51c471 text-uppercase" style={{ paddingLeft: 0 }}><Trans>Work</Trans></h5>
                    </div>
                </div>
                {
                    this.props.data.staskLocal && this.props.data.staskLocal.map((item) => <Work data={item}
                        onShowDelete={this.props.onShowDelete}
                        submitted={this.props.submitted}
                        onChange={this.props.onChange} />)
                }
                <div className="row  mt-2">
                    <div className="col-12" style={{ float: "right" }}>
                        <span id="add_task" className="uni_text_6d30ab cursor-pointer" onClick={this.props.onClick}>
                            <i className="fa fa-plus-square"></i> <Trans>Add</Trans></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardTask;