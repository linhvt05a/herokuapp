import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { InputText, Select, mapping} from '../input';
import { CardHeader } from '../common';

// ====================================================================

class CardFilterTask extends Component {
    render() {
        return (
            <div >
                <CardHeader label="Filter" />
                <div className="card square">
                    <div className="card-body">
                        <div className="row">
                            <InputText className="col-lg-3 col-md-3 col-sm-12" label="By Task Name" name="task_name" value={this.props.data.task_name} onChange={this.props.onChange} />
                            <Select className="col-lg-3 col-md-3 col-sm-12" label="By Task Status" name="status" value={mapping(this.props.status, this.props.data.status)} options={this.props.status} onChange={this.props.onChange} />
                            <Select className="col-lg-3 col-md-3 col-sm-12" label="By Person Assigned" name="persons" value={mapping(this.props.persons, this.props.data.persons)} options={this.props.persons} onChange={this.props.onChange} />
                            <Select className="col-lg-3 col-md-3 col-sm-12" label="By Owner Employee" name="employees" value={mapping(this.props.employees, this.props.data.employees)} options={this.props.employees} onChange={this.props.onChange} />
                        </div>
                        <div className="row">
                            <div className="col-auto ml-auto">
                                <button type="submit" className="btn-uni-purple" onClick={this.props.onFilter}>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFilterTask;
