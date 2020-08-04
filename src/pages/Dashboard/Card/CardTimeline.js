import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { Timeline, CardHeader, CardNodata, Spinner } from '../../../components/common';
import { tasks } from '../../../constant';
import { projectService } from '../../../services/index'
import { mappingListToSelectList, mapping } from '../../../components/input';
import * as ConvertData from '../../../utils/ConvertData'

class CardTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
            projects: [{ value: "", label: "-- All --" }],
            project_id: 0
        }
    }
    componentDidMount() {
        const params = this.props.search;
        const project_id = (("project_id" in params) ? params['project_id'] : null);

        this.getProjectSortList()
        this.getProjectTimeLine(project_id)
    }
    getProjectTimeLine = (project_id) => {
        this.setState({ loading: true });
        projectService.projectTimeline(this.props.user.token, project_id).then(
            res => {

                this.setState(
                    {
                        tasks: ConvertData.convertTaskTimeLineChart(res['detail'], null, "project"),
                        loading: false,
                    },
                    () => this.forceUpdate()
                );
            },
            err => {
                this.setState({ loading: false });
                this.props.showToast('error', err);
            }
        );
    }
    getProjectSortList = () => {
        this.setState({ loading: true });
        projectService.shortenList(this.props.user.token, null, null, 100).then(
            res => {
                var projects = mappingListToSelectList(res["detail"], 'project_id', 'project_name');
                projects.unshift({ value: "", label: "-- All --" })
                this.setState(
                    {
                        loading: false,
                        projects: projects
                    },
                    () => this.forceUpdate()
                );
            },
            err => {
                this.setState({ loading: false });
                this.props.showToast('error', err);
            }
        );
    }
    onFilter = (value) => {
        var project_id = value
        var params = {
            project_id: (project_id === '' ? null : project_id)
        };
        this.props.updateLocation(params);
    }
    render() {
        const params = this.props.search;
        const project_id = (("project_id" in params) ? params['project_id'] : null);
        // console.log("render", this.state.tasks)
        return (
            <div className="col-12 col-md-12 col-xl-12" >
                <CardHeader label="home_map_project_timeline"
                    purpleData={this.state.projects} onPurpleFilter={this.onFilter}
                    purpleLabel={mapping(this.state.projects, project_id).label} />
                {this.state.tasks && <Timeline tasks={this.state.tasks} />}
            </div>
        )
    }
}



export default CardTimeline;
