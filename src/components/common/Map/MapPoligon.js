import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, Tooltip, TileLayer } from 'react-leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import L from 'leaflet';
import { MAP_KEYS } from '../../../contant';

delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('../../../../public/images/marker.png'),
//     //shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('../../../../public/images/marker.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MapPoligon(props) {
    let { data, zoom } = props;

    //https://blog.logrocket.com/how-to-use-react-leaflet/
    //https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/other-layers.js

    const position = [16.0709261545449, 108.180991165145];
    return (
        <Map
            center={position} zoom={zoom ? zoom : 5}
            style={{ height: "670px", zIndex: 0 }}
            attributionControl={false}
            scrollWheelZoom={false}
        // scrollWheelZoom="center"
        // zoomControl={false}
        >
            <ReactLeafletGoogleLayer
                useGoogMapsLoade={true}
                googleMapsLoaderConf={{ KEY: MAP_KEYS }}
                type={'hybrid'}
                attributionControl={false}
            />
            {/* <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url=''
                /> */}

            {data && data.map((item, index) => (
                <Marker position={[item.lat, item.lon]} key={index} className="custom_marker_map"
                // onmouseover={(e) => {
                //     console.log("chay", e);
                //     e.target.openPopup();
                // }}
                // onmouseout={(e) => {
                //     console.log("chay", e);
                //     e.target.closePopup();
                // }}
                >
                    <Popup closeButton={false} className="custom_popup_map" onOpen={true}>
                        {item.project_name}
                    </Popup>
                </Marker>
            ))}
        </Map>
    );
}
export default MapPoligon;
