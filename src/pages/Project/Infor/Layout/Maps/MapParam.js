import React, { useEffect, memo } from 'react';
import { Trans } from 'react-i18next';

import ReactMapboxGl, { Marker, Popup, Source, Feature, Layer } from "react-mapbox-gl";

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

const MapParam = (props) => {
    const { data, lat, long, name } = props;
    console.log('tttttt', data);
    return (
        <Map
            className="map w-100 "
            style={MAP_STYLE}
            center={[long, lat]}
            zoom={[13]}
            containerStyle={{
                minHeight: '80vh',
                width: '100%',
            }}>
            <Layer type="fill" paint={polygonPaint}>
                {
                    data.location &&
                    <Feature coordinates={data.location.coordinates} />
                }
            </Layer>
            <Marker
                coordinates={[long, lat]}
                anchor="bottom">
                <img src={markerUrl} />
            </Marker>
            <Popup
                coordinates={[long, lat]}
                offset={{
                    'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <div class='m_map'>
                    <h1 class='top'>{name}<i class='address'>{data.address}</i></h1>
                    <div class='center'><p class='item'>
                        <span class='irr_text'>Number <i>IRR</i></span>
                        <span class='number'>%</span></p><p class='item'>
                            <span class='npv_text'>Number <i>NPV</i></span>
                            <span class='number'></span></p>
                    </div>
                    <ul class='bottom'>
                        <li><Trans>Diện tích đất</Trans>: <span class='value'>{data.square}</span></li>
                        <li class='investor'><Trans>Chủ đầu tư</Trans>: <span class='value'>{data.investor}</span></li>
                    </ul>
                </div>
            </Popup>
        </Map>
    )
}

export default memo(MapParam);
