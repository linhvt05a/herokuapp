import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { mappingListToSelectList, mapping } from '../../../components/input'
import { MapBox, CardHeader, CardNodata, Spinner } from '../../../components/common'
import { provinces } from "../../../constant"
import { dashboardService, locationService } from "../../../services/index";

const ALL_REGION = {value:'All', label: "home_map_region"};
const ALL_PROVINCE = {value:'All', label: "home_map_province"};

class StaticRow extends Component {
    render() {
        const { total_project, period_icon, period_name} = this.props.project;
        const icon = "/static/img/project_status/map-pin-"+period_icon+".png"
        return (
            <tr>
                <td width="15%" className="align-middle display-4" align="center">
                    <img src={icon} height="40px"/>
                </td>
                <td style={{"verticalAlign": "middle"}}>
                    <div className="f_center">
                        <h3 className="mb-0 "> {total_project} </h3>
                        <p className="mb-0 text-status status_type_map_5"> {period_name} </p>
                    </div>
                </td>
            </tr>
        )
    }
}

class CardMap extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            list_project: null,
            list_period: null,
            regions: [ALL_REGION],
            provinces: [ALL_PROVINCE]
        };
    }

    componentDidMount(){
        const params = this.props.search;
        const region_id = ( ("region_id" in params) ? params['region_id'] : null );
        const province_id = ( ("province_id" in params) ? params['province_id'] : null );
        const project_name = ( ("project_name" in params) ? params['project_name'] : null );

        this.setState({loading:true});
        dashboardService.projectList(this.props.user.token, project_name, region_id, province_id).then(
            res => {
                var data = res["detail"];
                this.setState(
                    {
                        loading:false,
                        list_project:data.list_project,
                        list_period:data.list_period
                    },
                    () => this.forceUpdate()
                );
            },
            err => {
                this.setState({loading:false});
                this.props.showToast('error', err);
            }
        );

        locationService.getRegion(this.props.user.token).then(
            res => {
                var regions = mappingListToSelectList(res['detail'], 'region_id');
                regions.unshift(ALL_REGION);
                this.setState(
                    {
                        regions: regions,
                        provinces: [ALL_PROVINCE]
                    },
                    () => this.forceUpdate()
                );
            },
            err => {
                this.props.showToast('error', err);
            }
        );

        if( region_id ){
            locationService.getProvicesFilterRegion(this.props.user.token, region_id).then(
                res => {
                    var provinces = mappingListToSelectList(res['detail'], 'province_id');
                    provinces.unshift(ALL_PROVINCE);
                    this.setState(
                        {
                            provinces: provinces
                        },
                        () => this.forceUpdate()
                    );
                },
                err => {
                    this.props.showToast('error', err);
                }
            );
        }
    }

    onSelectRegion = (region_id) =>{
        var params = {
            region_id: ( region_id == "All" ? null : region_id ),
            province_id: null
        }
        this.props.updateLocation(params);
    }

    onSelectProvince = (province_id) =>{
        var params = {
            province_id: ( province_id == "All" ? null : province_id )
        }
        this.props.updateLocation(params);
    }

    onSearch = (value) => {
        var project_name = value.trim();
        var params = {
            project_name: ( project_name === '' ? null : project_name )
        };
        this.props.updateLocation(params);
    }

    markers(){
        var features = [];
        var left = 115, right = 100, top = 6, bottom = 24;
        if( this.state.list_project ){
            var list_project = this.state.list_project;
            for( var i = 0 ; i < list_project.length ; i ++ ){
                var project = list_project[i];
                var longtitude = project.longtitude;
                var latitude = project.latitude;
                var desc = '<div class="m_popup"';
                desc += '<h1 class="top">';
                desc += '<a style="cursor:pointer;text-decoration: underline;color: #399b54;" href="/backend/project/dashboard/'+project.project_id+'">'+project.project_name+'</a>';
                desc += '<i class="address">'+project.address+'</i>';
                desc += '</h1>';
                desc += '<div class="con">';
                desc += '<p class="item"><span class="irr_text">Số <i>IRR</i></span><span class="number">'+project.IRR+'</span></p>';
                desc += '<p class="item"><span class="npv_text">Số <i>NPV</i></span><span class="number">'+project.NPV+'</span></p>';
                desc += '</div>';
                desc += '<ul class="bottom">';
                desc += '<li>Diện tích đất : <span class="value">'+project.total_area_square+'</span></li>';
                desc += '<li class="investor">Chủ Đầu Tư : <span class="value">'+project.investor_name+'</span></li>';
                desc += '</ul>';
                desc += '</div>';
                features.push(
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [longtitude, latitude]
                        },
                        'properties': {
                            'period_id': project.period_id,
                            'project_id': project.project_id,
                            'description': desc,
                            'icon': project.period_id
                        }
                    }
                )

                if( left > longtitude ){ left = longtitude }
                if( right < longtitude ){ right = longtitude }
                if( top < latitude ){ top = latitude }
                if( bottom > latitude ){ bottom = latitude }
            }
        }

        var markers = {
            'layer': 'projects',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': features
                }
            },
            bbox: [[left, top], [right, bottom]],
            icons: [
                { "name": "1", "url": "/static/images/map-pin-1.png" },
                { "name": "2", "url": "/static/images/map-pin-2.png" },
                { "name": "3", "url": "/static/images/map-pin-3.png" },
                { "name": "4", "url": "/static/images/map-pin-4.png" },
                { "name": "5", "url": "/static/images/map-pin-5.png" }
            ]
        }
        return markers;
    }

    render() {
        const params = this.props.search;
        const region_id = ( ("region_id" in params) ? params['region_id'] : null );
        const province_id = ( ("province_id" in params) ? params['province_id'] : null );
        const project_name = ( ("project_name" in params) ? params['project_name'] : null );
//        const regionSelect = mapping(this.state.regions, region_id);
//        const regionLabel= ( regionSelect ? regionSelect.label : "home_map_region" );
//        const provinceSelect = mapping(this.state.provinces, province_id);
//        const provinceLabel= ( provinceSelect ? provinceSelect.label : "home_map_province" )

        return (
            <div className="col-12 col-md-12 col-xl-12" >
                <CardHeader label="home_map_project"
                    purpleData={this.state.regions} purpleLabel={mapping(this.state.regions, region_id).label} onPurpleFilter={this.onSelectRegion}
                    blueData={this.state.provinces} blueLabel={mapping(this.state.provinces, province_id).label} onBlueFilter={this.onSelectProvince}
                    searchLabel="home_map_search" searchValue={project_name} onSearch={this.onSearch}
                    />

                <div className="card square">
                    <div className="card-body p-0 m-0">
                        {
                            this.state.loading = true ?
                            (
                                this.state.list_period != null ?
                                (
                                    <div className="row">
                                        <div className="col-12 col-md-8 col-xl-9">
                                            <MapBox markers={this.markers()} />
                                        </div>
                                        <div className="col-12 col-md-4 col-xl-3  m-0 pl-3 pl-md-0">
                                            <div className="pl-3 pl-md-0">
                                                <h5 className="card-title mt-3 title_map"><Trans>home_map_project_phases</Trans></h5>
                                                <table className="table table-sm mb-0 dashboard_map" id="project-staus">
                                                    <tbody>
                                                        {
                                                            this.state.list_period.map( (project, index) => (
                                                            <StaticRow key={index} project={project} />
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <CardNodata />
                                )
                            ) :
                            (
                                <Spinner />
                            )

                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default CardMap;
