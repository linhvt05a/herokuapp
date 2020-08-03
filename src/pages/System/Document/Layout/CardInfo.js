import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { InputText } from '../../../../components/input/index';

class CardMeta extends Component {
    render() {
        return (<div className="row mt-2">
            <div className="col-12 ">
                <h5 className="uni_text_51c471 text-uppercase ">Metadata</h5>
                <div className="m_table m_table--list_project mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center t-head" width="5px"><Trans>No.</Trans></th>
                                <th className="t-head"><Trans>Name</Trans></th>
                                <th className="text-center t-head"><Trans>Required Flag</Trans></th>
                                <th className="text-center t-head"><Trans>Action</Trans></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="text-center"><Trans>No data</Trans>
                                    <a className="uni_text_6d30ab font-weight-bold" href="/system/metadata/"> <Trans>click here</Trans></a>  <Trans>to create new</Trans>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
    }
}
class CardInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data, submitted } = this.props;
        let name_vi = data.name['1']
        let name_en = data.name['2']
        const { disabled } = this.props;
        return (<div className="card">
            <div className="card-body">
                <div className="row">
                    <InputText className="col-12"
                        disabled={disabled} isEmpty
                        classLabel="fw-medium"
                        classValue="form-control square"
                        submitted={submitted} required="true" value={data.code} label="Code" name="code" type="text" onChange={this.props.handleChange}
                        warning="Missing information"
                    />
                </div>
                <div className="row">
                    <InputText className="col-12"
                        disabled={disabled} isEmpty
                        classLabel="fw-medium"
                        classValue="form-control square"
                        submitted={submitted} required="true" value={name_vi} label="vi" name="name_vi" type="text" onChange={this.props.handleChange}
                        warning="Missing information"
                    />
                </div>
                <div className="row">
                    <InputText className="col-12"
                        disabled={disabled} isEmpty
                        classLabel="fw-medium"
                        classValue="form-control square"
                        submitted={submitted} required="true" value={name_en} label="en" name="name_en" type="text" onChange={this.props.handleChange}
                        warning="Missing information"
                    />
                </div>
                {this.props.metadata && <CardMeta />}
            </div>
        </div>);
    }
}

export default CardInfo;