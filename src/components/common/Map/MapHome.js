import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MapHome(props) {
    const position = [10.782504, 106.695931];
    return (
        <Map 
            center={position} zoom={13} 
            style={{ height: "670px", zIndex: 0 }}
            attributionControl={false}
            >
            <ReactLeafletGoogleLayer 
                useGoogMapsLoade = {true}
                googleMapsLoaderConf={{KEY: 'AIzaSyDZt7EWQR3cI-a_0to4VT2JVcF-c7ti6Ro'}} 
                type={'hybrid'} 
            />
            {/* <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url=''
            /> */}
            {/* <Marker position={position}>
                <Popup>
                    popup <br/> Easily customizable.
                </Popup>
            </Marker> */}
        </Map>
    );
}
export default MapHome;
