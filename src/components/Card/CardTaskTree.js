import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';

import { CardHeader, CardNodata} from '../common';
import InfinityMenu from "react-infinity-menu";
import "react-infinity-menu/src/infinity-menu.css";
import { InputCheckBox } from '../input';

class CardTaskTree extends Component {
    render() {
        return (
            <div>
                <CardHeader label="Task List" 
                        actionData={this.props.actionData} 
                        purpleData={this.props.purpleData} 
                        purpleLabel={this.props.purpleLabel}
                        onPurpleFilter={this.onPurpleFilter} 
                        onClickAction={this.props.onClickAction}    
                    />
                <div className="card square">
                    <div className="card-body">
                        <div className="m_table list-table m_list_task mt-3" style={{ "maxHeight": "100%", "marginBottom": "20px" }}>
                            <table className="w-100 table-hover" id="tree-table">
                                <thead>
                                    <tr>
                                        <th><Trans>No.</Trans></th>
                                        <th><Trans>Content</Trans></th>
                                        <th><Trans>Status</Trans></th>
                                        <th><Trans>Updated By</Trans></th>
                                        <th style={{ "opacity": "0" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                 { this.props.task_list && this.props.task_list.map((task, index)=> 
                                    <Task task={task} index ={index} isActive={this.props.isActive} selectedTask ={(name, value)=>this.props.selectedTask(name, value, index)} key={index}/>)
                                 }
                                </tbody>
                            </table>
                            <div style={{opacity :(!this.props.isActive) ? 0 : 1}}>
                                { this.props.task_list && this.props.task_list.length > 0 ? 
                                    <button type="button" className="btn-uni-purple _btn-deleted" style={{float:'right', marginTop: 20}} 
                                        onClick={this.props.deleteTask}> Delete
                                    </button>:''}
                            </div>
                        </div>
                        {this.props.task_list && this.props.task_list.length === 0 ? <CardNodata />: ''}
                    </div>
                </div>
            </div>
        )
    }
}

class Task extends Component {
    constructor() {
        super()
        this.state = {
            child: true,
            showChild: false,
            expandedRows: [],
        
        }
    }

    handleClick = () => {
        this.setState({
            showChild: !this.state.showChild,
        })
    }

    render() {
        var linkTask= `/task-internal/legal/task/${1}`
        return (
            <Fragment>
                <tr className="level-1" data-id="2782" data-parent="0" data-level="1">
                    <td width="5%" className="align-middle text-left">
                        {this.props.index + 1}
                    </td>
                    <td className="align-middle text-left" data-column="name">
                        <div data-column="column-title" className="d-flex">
                            <i className={this.state.showChild ? "arrow fa fa-angle-up" : "arrow fa fa-angle-down"} onClick={this.handleClick}></i>
                            <div className="d-flex flex-column  w-100">
                                <a href={linkTask} className="heading uni_text_black fw-medium" style={{ "textDecoration": "underline", "color": "rgb(0, 0, 0)", "fontWeight": "500" }}>
                                    [{this.props.task.task_id}] {this.props.task.task_name}
                                </a>
                                <div className="user form-group mb-0 content_assigner_select ml-4" data-column="assign_employee" data-task="2782">
                                    <i className="avatar lar la-user-circle"></i>
                                    <i className="name pl-1 assigner_quick">{this.props.task.task_assign_employee}</i>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="align-middle text-left" width="25%">
                        <div className="status form-group mb-0" data-status-task="2782">
                           <GetTextColor color_status = {this.props.task.status}/>
                            <i className="date">{this.props.task.created_at}</i>
                        </div>
                    </td>
                    <td className="align-middle text-left" width="15%">
                        <div className="documents">
                            <span className="name">{this.props.task.created_by}</span>
                            <span>
                                <i className="version" onClick={this.showModal}>Tổng Tài Liệu: <strong>{}</strong></i>
                            </span>
                        </div>
                    </td>
                    <td className="align-middle" >
                         <InputCheckBox type="checkbox" name="checkedTask" style={{opacity: !(this.props.isActive) ? 0 :  1, float: 'right'}}  
                            onChange={this.props.selectedTask} 
                            value ={this.props.task.checkedTask}
                         />
                    </td>
                </tr>
                {this.state.showChild && (this.props.task.child_task_list || []).map((item, index) => (
                    <ItemChild key={index} data={item} level={1} />
                ))
                }
            </Fragment>
        )
    }
}

class ItemChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level + 1,
            showChild: false,
        }
    }
    handleClick = () => {
        this.setState({
            showChild: !this.state.showChild,
        })
    }

    render() {
        return (
            <Fragment>
                <tr className={"level-" + this.state.level}>
                    <td width="5%" className="align-middle text-left"></td>
                    <td className="align-middle text-left" data-column="name">
                        <div data-column="column-title" className="d-flex">
                            <span className="distance" style={{ width: "50px" }}></span>
                            <i className={this.state.showChild ? "arrow fa fa-angle-up" : "arrow fa fa-angle-down"} style={{ opacity: this.props.data.child ? "1" : "0" }} 
                                    onClick={this.handleClick}></i>
                            <div className="d-flex flex-column w-100">
                                <a className="heading uni_text_black fw-medium" href="#"
                                    style={{ textDecoration: "underline", color: "rgb(0, 0, 0)", fontWeight: "500" }} onClick={this.test}>
                                    {this.props.data.task}
                                </a>
                                <div className="user form-group mb-0 content_assigner_select ml-4" data-column="assign_employee" data-task="2782">
                                    <i className="avatar lar la-user-circle"></i>
                                    <i className="name pl-1 assigner_quick">{}</i>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="align-middle text-left" width="15%">
                        <div className="status form-group mb-0">
                            <span className="status_task_text uni_task_status_3">{this.props.data.status}</span>
                            <i className="date">{}</i>
                        </div>
                    </td>
                    <td className="align-middle text-left" width="15%">
                        <div className="documents">
                            <span className="name">{}</span>
                            <span>
                                <i className="version" onClick={this.showModal}>Tổng Tài Liệu: <strong>{}</strong></i>
                            </span>
                        </div>
                    </td>
                </tr>
                {this.state.showChild && this.props.data.map((item, index) => (
                    <ItemChild key={index} data={item} level={this.state.level} />
                ))
                }
            </Fragment>
        )
    }
}


function GetTextColor (props){
    if(props.color_status === 1){
        return <span className="status_task_text uni_task_status_0">New</span>
    }
    if(props.color_status === 2){
        return <span className="status_task_text uni_task_status_1">Pending</span>
    }

    if(props.color_status === 3){
        return <span className="status_task_text uni_task_status_2">In Progress</span>
    }
    if(props.color_status === 4){
        return <span className="status_task_text uni_task_status_3">Stop</span>
    }else{
        return <span className="status_task_text uni_task_status_4">Finished</span>
    }
    
}
export default CardTaskTree;
