import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, Tooltip, TileLayer } from 'react-leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('../../../../public/assets/images/marker.png'),
    //shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MapPoligon(props) {
    let { data } = props;

    //https://blog.logrocket.com/how-to-use-react-leaflet/
    //https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/other-layers.js

    const position = [16.0709261545449, 108.180991165145];
    return (
        <Map 
            center={position} zoom={5} 
            style={{ height: "670px", zIndex: 0 }}
            attributionControl={false}
            // zoomControl={false}
            >   
                <ReactLeafletGoogleLayer 
                    useGoogMapsLoade = {true}
                    googleMapsLoaderConf={{KEY: 'AIzaSyDZt7EWQR3cI-a_0to4VT2JVcF-c7ti6Ro'}} 
                    type={'hybrid'} 
                    attributionControl={false}
                />
                {/* <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url=''
                /> */}

                {data && data.map((item, index) => (
                    <Marker position={[item.lat, item.lon]} key={index} className="custom_marker_map">
                        <Popup closeButton={false} className="custom_popup_map" onOpen={true}>
                            {item.project_name}
                        </Popup>
                    </Marker>
                ))} 
        </Map>
    );
}
export default MapPoligon;
