import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';
class Teamplate extends Component {

    onClickTemplateEdit = (e) => {
        this.props.onClickTemplateEdit(this.props.data)
    }

    render() {
        const { data } = this.props;
        return (
            <tr style={{ backgroundColor: data.workflow_template_group_has_child_flag ? 'rgba(109, 48, 170, 0.2)' : '' }}>
                <td>{this.props.index + 1}</td>
                <td className="align-middle text-center">
                    <i class=" uni_text_6d30ab  las la-check-square" style={{ fontSize: 20, display: data.workflow_template_group_has_child_flag ? '' : 'none' }} ></i>
                </td>
                {data.list_workflow_template_group_name
                    .sort((a, b) => a.workflow_template_group_language_id - b.workflow_template_group_language_id)
                    .map((item) => (
                        <td >{item.workflow_template_group_name}</td>
                    ))
                }
                <td className="align-middle text-center">
                    <a title="Edit group" data-id={data.id} onClick={this.onClickTemplateEdit}>
                        <i style={{ fontSize: "20px", color: "#399b54" }} className="pl-2 las la-edit" aria-hidden="true "></i>
                    </a>
                </td>
            </tr>
        );
    }
}
class CardTemplate extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-12">
                    <h6 className="text-uppercase uni_text_6d30ab "><Trans>group_template</Trans></h6>
                </div>
                <div className="col-12">
                    <div className="m_table m_table--list_project" style={{ maxHeight: "900px", maxWidth: "100%" }}>
                        <table className="table">
                            <thead>
                                <tr><th width="4%"> <Trans>No. </Trans></th>
                                    <th width="10%" className="text-center"><Trans>parent_group</Trans></th>
                                    <th width="20%"> <Trans>name</Trans> (<Trans>vi</Trans>)</th>
                                    <th width="20%"> <Trans>name</Trans> (<Trans>en</Trans>)</th>
                                    <th width="10%" className="text-center"><i className="las la-cog"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.datas && this.props.datas.map((item, index) =>
                                    <Teamplate key={index} index={index} data={item} onClickTemplateEdit={this.props.onClickTemplateEdit} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardTemplate;