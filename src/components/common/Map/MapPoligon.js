import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
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
    // const createData = (project_name, lat, long, location) => {
    //     return { project_name, lat, long, location }
    // }

    // const [state, setState] = useState({
    //     data: []
    // })

    // if (data && data.length > 0) {
    //     let newData = [];
    //     data.map((item) => {
    //         newData.push(createData(item.project_name, item.lat, item.long, item.location))
    //     })
    //     setState({ ...state, data: newData })
    // }
    // console.log(state);
    // data && data.map((item, index) => {
    //     console.log(item);
    // })

    //https://blog.logrocket.com/how-to-use-react-leaflet/
    //https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/other-layers.js

    const position = [10.782504, 106.695931];
    const center = [10.7344832607381, 106.748816638668];
    return (
        // data && data.map((item, index) => (
            
        // ))
        <Map 
            center={position} zoom={5} 
            style={{ height: "670px", zIndex: 0 }}
            attributionControl={false}
            position={'topright'}
            // zoomControl={false}
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

                {data && data.map((item, index) => (
                    <Marker position={[item.lat, item.lon]} key={index} className="custom_marker_map">
                        <Popup closeButton={false} className="custom_popup_map">
                            {item.project_name}
                        </Popup>
                    </Marker>
                ))} 
        </Map>
    );
}
export default MapPoligon;
