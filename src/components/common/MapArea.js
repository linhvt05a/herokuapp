import React, { memo } from 'react';
import { Trans } from 'react-i18next';

import ReactMapboxGl, { Popup, Feature, Layer, Marker } from "react-mapbox-gl";
import CardNodata from '../Card/CardNodata';

const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
});

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
    'fill-color': '#e94c4c',
    'fill-outline-color': 'red',
    'fill-opacity': 0.2
};

const markerUrl = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

const MapArea = (props) => {
    const { projectListSuccess, projectListRes, locationData } = props;
    const markerData = projectListRes ? projectListRes[locationData] : {}
    return (
        <div className="card h-100">
            <div className="card-body p-0">
                {
                    (projectListSuccess && markerData) ?
                    (markerData.lon && markerData.lat) ?
                    <Map
                        className="map"
                        style={MAP_STYLE}
                        center={[markerData.lon, markerData.lat]}
                        zoom={[14]}
                        containerStyle={{
                            minHeight: '715px',
                            width: '100%',
                        }}>
                        <Layer type="fill" paint={polygonPaint}>
                            {
                                markerData.location &&
                                <Feature coordinates={markerData.location.coordinates} />
                            }
                        </Layer>
                        <Marker
                            coordinates={[markerData.lon, markerData.lat]}
                            anchor="bottom">
                            <img src={markerUrl}/>
                        </Marker>
                        <Popup
                            coordinates={[markerData.lon, markerData.lat]}
                            offset={{
                                'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                            }}>
                            <div className='m_map'>
                                <h1 className='top' style={{ borderBottom: "1px solid #f3f3f3" }}>{markerData.project_name}<i class='address'>{markerData.address}</i></h1>
                                <ul className='bottom'>
                                    <li><Trans>land_area</Trans>: <span className='value'>{markerData.project_acreage}</span></li>
                                    <li className='investor'><Trans>investor</Trans>: <span className='value'>{markerData.investor_name}</span></li>
                                </ul>
                            </div>
                        </Popup>
                    </Map> : <CardNodata />  : <CardNodata />
                }
            </div>
        </div>
    )
}

export default memo(MapArea);
