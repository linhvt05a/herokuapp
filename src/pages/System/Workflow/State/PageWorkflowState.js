import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { ArcherContainer, ArcherElement } from 'react-archer';
import i18n from '../../../../i18n';

import {
    CardHeader, Spinner
} from '../../../../components/common';
import { progress } from '../../../../constant'
import { mapping } from '../../../../components/input';
import './PageWorkflowState.css'
import { sysWorkingProcessService } from "../../../../services/index";

class CardState extends Component {
    getListTarget(children) {
        var listTarget = []
        for (var i = 0; i < children.length; i++) {
            listTarget.push({ targetId: children[i], targetAnchor: 'top', sourceAnchor: 'bottom' })
        }
        return listTarget
    }
    render() {
        return (
            <tr>
                <td className="text-center ">
                    <div className="row mt-1 mb-1">
                        <div className="col-12">{this.props.data.state_step}</div>
                    </div>
                </td>
                <td className="text-center ">
                    <div className="row mt-1" >
                        <div className="col-12">
                            {
                                this.props.data.list_state.map((item,index) =>
                                    <ArcherElement id={item.state_id} key={index} relations={this.getListTarget(item.children)}>
                                        <a href={"/system/workflow/state/" + this.props.id + "/edit/" + item.state_id + "?group_id=" + this.props.group_id} className="btn-state square js-btn-state" style={{ position: "relative", zIndex: "1 !important", height: "38px", margin:"2px" }}>
                                            {item.state_name}
                                        </a>
                                    </ArcherElement>
                                )
                            }
                        </div>
                    </div>
                </td>
            </tr >
        )
    }
}

class PageWorkflowState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: 0,
            datas: [],
            listGroup: [{ value: "", label: "-- All --" }]
        }
    }

    componentDidMount() {
        const group_id = this.props.search.group_id ? this.props.search.group_id : null
        if (group_id) {
            this.getListTemplateState(group_id)
        }
        this.getWorkingProjectDetail()

        this.props.updateTitle("Template: Pháp Lý Dự Án");
    }
    findChild(list, id) {
        var listChild = []
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var listState = list[i]['list_state']
                if (listState) {
                    for (var j = 0; j < listState.length; j++) {
                        if (listState[j].state_parent === id) {
                            listChild.push(listState[j].state_id)
                        }
                    }
                }
            }
        }
        return listChild
    }
    convertStateList(list) {
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var listState = list[i]['list_state']
                if (listState) {
                    for (var j = 0; j < listState.length; j++) {
                        listState[j]['children'] = this.findChild(list, listState[j].state_id)
                    }
                }
            }
        }
        return list
    }
    getListTemplateState = (group_id) => {
        sysWorkingProcessService.getStateList(this.props.user.token, this.props.params.id, group_id).then(
            res => {
                this.setState(
                    {
                        datas: this.convertStateList(res['detail']),
                    }
                );
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        );
    }
    convertGroups(list) {
        var listGroup = []
        for (var i = 0; i < list.length; i++) {
            var model = {}
            var name = list[i].list_workflow_template_group_name.find((item) => item['workflow_template_group_language_id'] === (i18n.language === "vn" ? 1 : 2))
            model.value = list[i]['workflow_template_group_id']
            model.label = ""
            if (name) {
                model.label = name['workflow_template_group_name']
            }
            listGroup.push(model)
        }
        return listGroup
    }
    getWorkingProjectDetail = () => {
        this.setState(
            {
                loading: true,
            },
            () => {
                sysWorkingProcessService.getWorkingProjectDetail(this.props.user.token, this.props.params.id).then(
                    res => {
                        const group_id = this.props.search.group_id ? this.props.search.group_id : null
                        var listGroup = this.convertGroups(res["detail"]["list_workflow_template_group"])
                        if (!group_id && listGroup) {
                            this.getListTemplateState(listGroup[0].value)

                        }
                        this.setState({
                            loading: false,
                            listGroup: listGroup
                        });
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    onChangeStatus = (value) => {
        window.location = "?group_id=" + value;
    }

    onBackPress = (e) => {
        window.location = '/system/workflow'
    }


    render() {
        var group_id = this.props.search.group_id ? this.props.search.group_id : null
        if (!group_id && this.state.listGroup.length > 0) {
            group_id = mapping(this.state.listGroup, "").value
        }
        const actions = [{ "href": "/system/workflow/state/" + this.props.params.id + "/add/?group_id=" + group_id, 'value': 'Add' }]
        return (
            <div>
                {
                    this.state.listGroup &&
                    <CardHeader label="Project Legal" purpleData={this.state.listGroup} purpleLabel={mapping(this.state.listGroup, group_id).label} actionData={actions} onPurpleFilter={this.onChangeStatus} />
                }
                < div className="card" >
                    <div className="card-body">
                        {
                            this.state.datas ?
                                (
                                    <ArcherContainer strokeColor='red' >
                                        <div className="m_table m_table--list_project">
                                            <table className="table" id="tableProjectType">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" style={{ width: "5px !important" }}><Trans>step</Trans></th>
                                                        <th className="text-center "><Trans>Detail</Trans></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="t_body">

                                                    {
                                                        this.state.datas.map((data, index) => <CardState key={index} data={data} index={index} id={this.props.params.id} group_id={group_id} />)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </ArcherContainer>
                                ) :
                                (
                                    <Spinner />
                                )
                        }
                    </div>
                </div >
                <button type="button" className="btn-uni-cancel" style={{ float: "right" }} onClick={this.onBackPress}><Trans>Back</Trans></button>
            </div >
        )
    }
}
export default PageWorkflowState;
