import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import ReactMapGL, { Marker, Popup, Source, FeatMure, Layer, } from "react-mapbox-gl";
import { Modal } from "antd"
import Item from 'antd/lib/list/Item';

const Map = ReactMapGL({
    accessToken:
        "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
    interactive: false
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
const MapCart = (props) => {
    const [viewport, setViewport] = React.useState({
        latitude: 89.5285582,
        longitude: -50.2416815,
    });
    // const onclick = (map, evt) => {
    //     console.log(evt);
    // };
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';
    let dataMap = props.data[0];
    return (
        <Map
            style={dataMap.floor_or_lot_map_style}
            center={[viewport.longitude, viewport.latitude]}
            zoom={[props.zoom ? props.zoom : 0]}
            movingMethod="jumpTo"
            interactive={false}
            // onClick={onclick}
            // maxBounds={[[-280, -42], [170, 85]]}
            containerStyle={{
                minHeight: '715px',
                width: '100%',
            }} >
            {dataMap.product_list.length > 0 && dataMap.product_list.map((marker, index) => {
                // return marker.product_marker.length > 0 ? <Popup
                //     tabIndex={index}
                //     coordinates={marker.product_marker}
                //     offset={{ 'bottom-left': [12, -38], 'bottom': [0, -25], 'bottom-right': [-12, -38] }}
                //     style={{ maxWidth: `200px` }}
                //     anchor="right">
                //     <div>{marker.product_name}</div>
                // </Popup> : null
                return marker.product_marker.length > 0 &&
                    <Marker
                        key={index}
                        coordinates={marker.product_marker}
                        offset={{}}
                        anchor="center"
                    >
                        <div className={`flag_purple middle-${marker.product_lon > -50 ? 'right' : 'left'} mapboxgl-marker mapboxgl-marker-anchor-center`} style={marker.product_lon > -50 ? { marginLeft: `200px` } : { marginRight: `100px` }} >
                            <span className="text">{marker.product_name}</span>
                            <span className="line" ></span>
                        </div>
                    </Marker>
            })}

        </Map>
    )
}

export default React.memo(MapCart);
