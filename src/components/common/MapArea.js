import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup, Source, Feature, Layer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
});
const MAP_LAYER_PROJECT = "MAP_LAYER_PROJECT";
const MAP_STYLE = {
    'version': 8,
    'sources': {
        'raster-tiles': {
            'type': 'raster',
            'tiles': [
                'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidG10cnVuZyIsImEiOiJjanJhejVyZ3EwazVkM3lub2R6MTNmeWU2In0.jHp5mgZPDlHUGIgca9h3vw'
            ],
            'tileSize': 256,
        }
    },
        'layers': [
        {
            'id': 'simple-tiles',
            'type': 'raster',
            'source': 'raster-tiles',
            'minzoom': 0,
            'maxzoom': 19
        }
    ]
};
const polygonPaint = {
    'fill-color': '#990000',
    'fill-outline-color': '#990000',
    'fill-opacity': 0.7
};
const AllShapesPolygonCoords = [
    [
        [106.689159, 10.784759],
        [106.686982, 10.78283],
        [106.689579, 10.780506],
        [106.691684, 10.782576],
        [106.689159, 10.784759]
    ]
];
var map = null;
var markerUrl = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

class MapArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 106.689347268802,
            lat: 10.7826565256751,
            zoom: 12,
            map: null,
            datas: {}
        };
    } 

    componentDidUpdate(prevProps, prevState) {
       if(this.state.datas != this.props.detail){
          this.setState({ datas: this.props.detail });
       }
       if(this.state.datas != null) {
            // this.loadDataMap(this.state.datas)
       }
    }

    render() {
        return (
            <div className="card h-100">
                <div className="card-body p-0">
                    <Map 
                        className="map"
                        style= { MAP_STYLE }
                        center= {[this.state.lng, this.state.lat]}
                        zoom={[14]}
                        containerStyle={{
                            minHeight: '715px',
                            width: '100%',
                        }}>
                        <Layer type="fill" paint={polygonPaint}>
                            <Feature coordinates={AllShapesPolygonCoords} />
                        </Layer>
                        <Marker
                            coordinates={[this.state.lng, this.state.lat]}
                            anchor="bottom">
                        <img src={markerUrl}/>
                        </Marker>
                        <Popup
                            coordinates={[this.state.lng, this.state.lat]}
                            offset={{
                                'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                            }}>
                            <div class='m_map'>
                                <h1 class='top'>data.project_name<i class='address'>data.project_full_address</i></h1>
                                <div class='center'><p class='item'>
                                    <span class='irr_text'>Number <i>IRR</i></span>
                                    <span class='number'>%</span></p><p class='item'>
                                    <span class='npv_text'>Number <i>NPV</i></span>
                                    <span class='number'></span></p>
                                </div>
                                <ul class='bottom'>
                                    <li>Land area : <span class='value'>data.project_area</span></li>
                                    <li class='investor'>Investor : <span class='value'>Công Ty Cổ Phần Dịch Vụ Thông Tin Bất Động Sản Netland</span></li>
                                </ul>
                            </div>
                        </Popup>
                    </Map>
                </div>

            </div>
        )
    }
}

export default MapArea;
