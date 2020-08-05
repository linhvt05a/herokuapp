import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { gantt } from 'dhtmlx-gantt';


class Toolbar extends Component {
    handleZoomChange = (e) => {
        if (this.props.onZoomChange) {
            this.props.onZoomChange(e.target.value)
        }
    }
    render() {
        const zoomRadios = ['Hours', 'Days', 'Months'].map((value, index) => {
            const isActive = this.props.zoom === value;
            return (
                <li key={index}>
                    <button type="button" key={value} value={value} className={`btn-uni-cancel btn-search-chart ${isActive ? 'btn-uni-purple' : ''}`} onClick={this.handleZoomChange}>
                        {value}
                    </button>  
                </li>
            );
        });
        return (
            <ul className="m_filter--show ">
                {zoomRadios}
            </ul>
        );
    }
}

class Gantt extends Component {
    componentDidMount() {
        gantt.config.xml_date = "%Y-%m-%d";
        const { tasks } = this.props;
        gantt.config.readonly = true;
        gantt.config.drag_move = false; //disables the possibility to move tasks by dnd
        gantt.config.drag_links = false; //disables the possibility to create links by dnd
        gantt.config.drag_progress = false; //disables the possibility to change the task //progress by dragging the progress knob
        gantt.config.drag_resize = false; //disables the possibility to resize tasks by dnd
        gantt.init(this.ganttContainer);
       
        gantt.parse(tasks);
    }
    addDeline=()=>{
        gantt.addTaskLayer(function draw_deadline(task) {
            if (task.deadline) {
                var el = document.createElement('div');
                el.className = 'deadline';
                var sizes = gantt.getTaskPosition(task, task.deadline);

                el.style.left = sizes.left + 'px';
                el.style.top = sizes.top + 'px';

                el.setAttribute('title', gantt.templates.task_date(task.deadline));
                return el;
            }
            return false;
        });
    }
    setZoom(value) {
        switch (value) {
            case 'Hours':
                gantt.config.scale_unit = 'day';
                gantt.config.date_scale = '%d %M';

                gantt.config.scale_height = 60;
                gantt.config.min_column_width = 30;
                gantt.config.subscales = [
                    { unit: 'hour', step: 1, date: '%H' }
                ];
                break;
            case 'Days':
                gantt.config.min_column_width = 70;
                gantt.config.scale_unit = 'week';
                gantt.config.date_scale = '#%W';
                gantt.config.subscales = [
                    { unit: 'day', step: 1, date: '%d %M' }
                ];
                gantt.config.scale_height = 60;
                break;
            case 'Months':
                gantt.config.min_column_width = 70;
                gantt.config.scale_unit = 'month';
                gantt.config.date_scale = '%F';
                gantt.config.scale_height = 60;
                gantt.config.subscales = [
                    { unit: 'week', step: 1, date: '#%W' }
                ];
                break;
            default:
                break;
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props.zoom !== nextProps.zoom;
    }

    componentDidUpdate() {
        gantt.render();
    }

    render() {
        const { zoom } = this.props;
        this.setZoom(zoom);
        // this.addDeline();
        return (
            <div ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%', maxHeight: '800px' }}>
            </div>
        );
    }
}

class Legends extends Component {
    render() {
        return (
            <ul className="m_filter--type">
                <li>
                    <i className="las la-square status_type_1"></i>
                    <span>Chưa triển khai</span>
                </li>
                <li>
                    <i className="las la-square status_type_2"></i>
                    <span>Đang triển khai</span>
                </li>
                <li>
                    <i className="las la-square status_type_3"></i>
                    <span>Dừng</span>
                </li>
                <li>
                    <i className="las la-square status_type_4"></i>
                    <span>Trễ Hạn</span>
                </li>
                <li>
                    <i className="las la-square status_type_5"></i>
                    <span>Hoàn Thành</span>
                </li>
            </ul>
        )
    }
}

class Timeline extends Component {
    state = {
        currentZoom: 'Days'
    };

    handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }

    render() {
        const { currentZoom } = this.state;
        return (
            <div className="card square" style={{ width: '100%', height: '100%' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <Legends />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 content-search-by-time">
                            <Toolbar zoom={currentZoom} onZoomChange={this.handleZoomChange} />
                        </div>
                    </div>
                    <Gantt tasks={this.props.tasks} zoom={currentZoom} />
                </div>
            </div>
        )
    }
}



export default Timeline;
