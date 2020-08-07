import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';

import ReactMapboxGl, { Marker, Popup, Source, Feature, Layer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
});



const polygonPaint = {
    'fill-color': '#e94c4c',
    'fill-outline-color': 'red',
    'fill-opacity': 0.2
};

const MapArea = (props) => {
    const [state, setState] = React.useState({
        lng: 106.689347268802,
        lat: 10.7826565256751,
        zoom: 12,
        map: null,
        datas: {}
    })
    console.log("props", props);
    const MAP_STYLE = {
        'version': 8,
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': [
                    `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidG10cnVuZyIsImEiOiJjanJhejVyZ3EwazVkM3lub2R6MTNmeWU2In0.jHp5mgZPDlHUGIgca9h3vw`
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
    return (
        <div className="card h-100">
            <div className="card-body p-0">
                {

                    // <Map
                    //     className="map"
                    //     style={MAP_STYLE}
                    //     center={[props.data.lon, props.data.lat]}
                    //     zoom={[14]}
                    //     containerStyle={{
                    //         minHeight: '715px',
                    //         width: '100%',
                    //     }}>
                    //     <Layer type="fill" paint={polygonPaint}>
                    //         {
                    //             props.data.location &&
                    //             <Feature coordinates={props.data.location.coordinates} />
                    //         }
                    //     </Layer>
                    //     <Popup
                    //         coordinates={[props.data.lon, props.data.lat]}
                    //         offset={{
                    //             'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                    //         }}>
                    //         <div className='m_map'>
                    //             <h1 className='top' style={{ borderBottom: "1px solid #f3f3f3" }}>{props.data.project_name}<i class='address'>{props.data.address}</i></h1>
                    //             <ul className='bottom'>
                    //                 <li><Trans>LandArea</Trans>: <span className='value'>{props.data.project_acreage}</span></li>
                    //                 <li className='investor'><Trans>Investor</Trans>: <span className='value'>{props.data.investor_name}</span></li>
                    //             </ul>
                    //         </div>
                    //     </Popup>
                    // </Map>
                }
            </div>
        </div>
    )
}

export default React.memo(MapArea);
