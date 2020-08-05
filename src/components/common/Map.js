import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

// import '../../styles/map.css';

//mapboxgl.accessToken = "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg";
const MAP_LAYER_PROJECT = "MAP_LAYER_PROJECT";
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
var map = null;
function loadImage(map, url, name){
    map.loadImage( url, function(error, image) {
        if (error) throw error;
        map.addImage( name, image);
    })
}

class MapBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 106.689373,
            lat: 10.773668,
            zoom: 5,
            map: null
        };
    }

    componentDidMount() {
        // console.log("componentDidMount map")
        var markers = this.props.markers;

        map = new mapboxgl.Map({
            container: this.mapContainer,
            style: MAP_STYLE,
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('load', function() {
            // console.log("componentDidMount map load")
            var icons = markers['icons'];
            if( icons ){
                for( var i = 0 ; i < icons.length ; i ++ ){
                    loadImage( map, icons[i]['url'], icons[i]['name']);
                }
            }
            map.addSource( MAP_LAYER_PROJECT, markers['source'] );
            map.addLayer( {
                'id': MAP_LAYER_PROJECT,
                'type': 'symbol',
                'source': MAP_LAYER_PROJECT,
                'layout': {
                    'icon-image': '{period_id}',
                    'icon-anchor': 'bottom',
                    'icon-allow-overlap': true
                }
            });
            map.fitBounds( markers['bbox'], { padding: 100 });
        });
        map.on('click', MAP_LAYER_PROJECT, function(e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup({offset: [0, -40]})
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });
        // this.setState( { map: map } );
    }

//    componentDidUpdate() {
//        console.log("componentDidUpdate map")
//        var markers = this.props.markers;
//        if( markers && map ){
//            map.on('load', function() {
//                console.log("componentDidUpdate map load")
////                map.getSource('drone').setData(json);
//
//            });
//
//        }
//    }

    render() {
        return (
            <div ref={el => this.mapContainer = el} style= {{ width : '100%', height : 505}} className = "map"/>
        )
    }
}

export default MapBox;
