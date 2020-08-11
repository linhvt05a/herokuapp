import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import ReactMapGL, { Marker, Popup, Source, Feature, Layer } from "react-mapbox-gl";
import { Modal } from "antd"

const Map = ReactMapGL({
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
const RASTER_SOURCE_OPTIONS = {
    'type': 'geojson',
    'data':
        'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
}
const MapArea = (props) => {
    const [viewport, setViewport] = React.useState({
        width: 400,
        height: 400,
        latitude: 0,
        longitude: 0,
        zoom: 8
    });
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';
    console.log(props);
    return (
        // <figure class="map">
        <Map

            style={props.data[0].floor_or_lot_map_style}
            center={[viewport.longitude, viewport.latitude]}
            zoom={[1]}
            containerStyle={{
                minHeight: '715px',
                width: '100%',
            }} >

        </Map>
        // </figure>

    )
}

export default React.memo(MapArea);
