import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {
    CardHeader, Spinner
} from '../../../components/common';
import {  mapping } from '../../../components/input/index';
import { listTask } from '../../../constant';

class Card_content extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="col-lg-12 mb-2">
                        <svg height="500px" width="100%">
                            <image href={this.props.data.img} height="500px" width="100%"></image>
                        </svg>
                    </div>
                </div>
                {
                    !this.props.data && <Spinner />
                }
            </div>
        )
    }
}

class PageWorkflowDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            group: 0
        }
    }

    componentDidMount() {
        const group = this.props.search.group ? this.props.search.group : 0
        this.props.updateTitle("Template: Pháp Lý Dự Án")
        this.setState({
            group: group,
            data: {
                img: 'http://uniprime.minerva.vn:9112//media/Workflow/template_4_56.svg'
            }
        })
    }
    onChangeStatus = (value) => {
        console.log("xxx " + value)
        window.location = "?group=" + value;
    }

    render() {

        return (
            <div>
                <CardHeader label="Project Legal" purpleData={listTask} purpleLabel={mapping(listTask, this.state.group).label} onPurpleFilter={this.onChangeStatus} />
                <Card_content data={this.state.data} id={this.props.params.id} />
            </div>
        )
    }
}
export default PageWorkflowDraw;