import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { mappingListToSelectList, InputSelect, mapping } from '../input';
import { CardHeader } from '../common';

import { locationService, projectService } from '../../services';

// ====================================================================

class CardFilterPosition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            region: {value: "", label: "Select region"},
            regions: [{value: "", label: "Select region"}],
            province: {value: "", label: "Select province"},
            provinces: [{value: "", label: "Select province"}],
            status: {value: "", label: "Select status project"},
            statusList: [{value: "", label: "Select status project"}],
            type_project: {value: "", label: "Select type project"},
            typeProjectList: [{value: "", label: "Select type project"}],
            data: {
                'region': '',
                'province': '',
                'status': '',
                'type_project': '',
            }
        };
    }

    componentDidMount() {
        this.setDataOriginal();
        this.loadStatus();
        this.loadProjectTypeList();
        this.loadRegion();
        if (this.props.search.region != '' && this.props.search.region != undefined) {
            this.loadProvince(this.props.search.region);
        }
    }

    setDataOriginal = () => {
        var region = this.props.search.region ? this.props.search.region : '';
        var province = this.props.search.province ? this.props.search.province : '';
        var status = this.props.search.status_project ? this.props.search.status_project : '';
        var type_project = this.props.search.type_project ? this.props.search.type_project : '';
        this.setState({
            data: {
                'region': region,
                'province': province,
                'status': status,
                'type_project': type_project,
            }
        })
    }

    loadStatus = () => {
        projectService.projectStatusList(this.state.user.token).then(
            res => {
                var data = this.props.search
                var statusList = mappingListToSelectList(res['detail'], 'project_status_id', 'name')
                statusList.unshift({value: "", label: "Select status project"})
                var status = data.status_project ? mapping(statusList, data.status_project) : statusList[0]
                this.setState({
                    status: status,
                    statusList: statusList,
                });
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        );
    }

    loadProjectTypeList = () => {
        projectService.projectTypeList(this.state.user.token).then(
            res => {
                var data = this.props.search
                var typeProjectList = mappingListToSelectList(res['detail'], 'project_setting_type_id', 'name')
                typeProjectList.unshift({value: "", label: "Select type project"})
                var type_project = data.type_project ? mapping(typeProjectList, data.type_project) : typeProjectList[0]
                this.setState({
                    type_project: type_project,
                    typeProjectList: typeProjectList,
                });
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        );
    }

    loadRegion = () => {
        locationService.getRegion(this.state.user.token).then(
            res => {
                var data = this.props.search
                var regions = mappingListToSelectList(res['detail'], 'region_id', 'name')
                regions.unshift({value: "", label: "Select region"})
                var region = data.region ? mapping(regions, data.region) : regions[0]
                this.setState(
                    {
                        regions: regions,
                        region: region
                    },
                    () => {
                        this.forceUpdate();
                    }
                );
            },
            err => {
                this.setState({ err })
            }
        )
    }

    loadProvince = (region_id) => {
        locationService.getRegion(this.state.user.token, region_id).then(
            res => {
                var data = this.props.search
                var provinces = mappingListToSelectList(res['detail'], 'province_id')
                provinces.unshift({value: "", label: "Select province"})
                var province = data.province ? mapping(provinces, data.province) : provinces[0]
                this.setState(
                    {
                        provinces: provinces,
                        province: province
                    },
                    () => {
                        this.forceUpdate();
                    }
                );
            },
            err => {
                this.setState({ err })
            }
        )
    }

    onChange = (name, value) => {
        let data = this.state.data
        data[name] = value.value
        if (name === 'region') {
            this.setState({
                data: data,
                region: value
            });
            if (value.value === '') {
                this.setState({
                    province: {value: "", label: "Select province"},
                    provinces: [{value: "", label: "Select province"}]
                });
            } else {
                this.loadProvince(value.value)
            }
        } else if (name === 'province') {
            this.setState({
                data: data,
                province: value
            });
        }
        else if (name === 'status') {
            this.setState({
                data: data,
                status: value
            });
        }
        else if (name === 'type_project') {
            this.setState({
                data: data,
                type_project: value
            });
        }

    }

    onSearch = () => {
        this.props.onSearch(this.state.data)
    }

    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <CardHeader label="Filter" />
                <div className="card square">
                    <div className="card-body">
                        <div className="row">
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="Select region" name="region" value={this.state.region} options={this.state.regions} onChange={this.onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="Select provinces" name="province" value={this.state.province} options={this.state.provinces} onChange={this.onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="Select type projects" name="type_project" value={this.state.type_project} options={this.state.typeProjectList} onChange={this.onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="Select status project" name="status" value={this.state.status} options={this.state.statusList} onChange={this.onChange} />
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <button type="submit" style={{ "float": "right" }} className="btn-uni-purple " onClick={this.onSearch} ><Trans>Search</Trans></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CardFilterPosition;
