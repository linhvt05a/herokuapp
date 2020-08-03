// Display content MAP
function display_map(lat, lon, pro_name, pro_address, total_area, investor_name, irr, npv){

    if (lat ===  null)
        lat = '{{ LAT }}';
    if (lon === null)
        lon = '{{ LON }}';

    var province_polygon_gis = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[106.650495585154, 10.7514818985209], [106.653260485154, 10.7516617985209], [106.654991085154, 10.7461927985216], [106.665519085152, 10.7502213985211], [106.675069585151, 10.7487825985213], [106.67770598515, 10.7517062985209], [106.684522685149, 10.751007498521], [106.686996685149, 10.7532467985207], [106.68136218515, 10.7654000985191], [106.674597085151, 10.7610013985197], [106.651078485154, 10.7563405985203], [106.650495585154, 10.7514818985209]]]
            },
            'properties': {'id': 726, 'name': 'Quận 5', 'area': 430.56, 'bg_color': '#800000'}
        }]
    };

    var attribution = '&copy; <a href="http://www.minerva.vn">Minerva</a>';
    var url_base = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var layer_base = L.tileLayer(url_base, {attribution: attribution});

    var latlng = new L.LatLng(lat, lon);

    var map = new L.Map('map', {
        attributionControl: false,
        center: latlng,
        zoom: 10,
        minZoom: 5,
        maxZoom: 15,
        layers: [layer_base],
        zoomControl: false,
    });

    map.scrollWheelZoom.disable();
    map.on('click', function () {
        if (map.scrollWheelZoom.enabled()) {
            map.scrollWheelZoom.disable();
        } else {
            map.scrollWheelZoom.enable();
        }
    });

    drawnItems = L.featureGroup().addTo(map);

    var info = initInfoCard(map).addTo(map);

    var info_map = initInfo(map);
    info_map.addTo(map)

    //
    var address = initInfoTopRight(map);
    address.addTo(map);

    //
    var polygon = province_polygon_gis;
    var geojson;

    //
    var baseballIcon = L.icon({
        iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });
    var marker = L.marker([lat, lon], {
        color: '#e94c4c',
        weight: 50,
        fillColor: '#e94c4c',
        icon: baseballIcon,

    }).addTo(map);

    var  html = '';
    if(pro_name != ''){
          html = '<div class="m_map">' +
            '            <h1 class="top">'+ pro_name +
            '                <i class="address">'+pro_address+ '</i>' +
            '            </h1>' +
            '            <div class="center">' +
            '                <p class="item">' +
            '                    <span class="irr_text">Số <i>IRR</i></span>' +
            '                    <span class="number">'+ irr + '</span>' +
            '                </p>' +
            '                <p class="item">\n' +
            '                    <span class="npv_text">Số <i>NPV</i></span>' +
            '                    <span class="number">'+ npv +'</span>' +
            '                </p>' +
            '            </div>' +
            '            <ul class="bottom">' +
            '                <li>Diện tích đất : <span class="value">'+ total_area +'</span></li>' +
            '                <li class="investor">Chủ đầu tư : <span class="value">'+investor_name+'</span></li>' +
            '            </ul>' +
            '        </div>' ;
    }

    marker.bindPopup(html).openPopup();

    geojson = L.geoJSON(polygon, {
        style: function (feature) {
            return {
                weight: 1,
                color: '#990000',
                dashArray: '',
                fillOpacity: 0.5,
                fillColor: feature.properties.bg_color
            };
        },
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: function () {},
                mouseout: function () {},
                click: function (e) {

                    map.fitBounds(e.target.getBounds(), {padding: [1, 1]});
                }
            });
            drawnItems.addLayer(layer);
            layer._leaflet_id = layer.feature.properties.id;
        }
    }).addLayer(layer_base);


    map.panTo(new L.LatLng(lat, lon));
}