import React from 'react';
import ReactMapGL from "react-mapbox-gl";


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


const MapCart = (props) => {
    const [viewport, setViewport] = React.useState({
        latitude: 10.7789251,
        longitude: -106.6886253,
    });


    return (
        <Map
            style={MAP_STYLE}
            center={[-0.481747846041145, 51.3233379650232]}
            zoom={[14]}
            movingMethod="jumpTo"
            containerStyle={{
                minHeight: '375px',
                width: '100%',
            }} >


        </Map>
    )
}

export default React.memo(MapCart);