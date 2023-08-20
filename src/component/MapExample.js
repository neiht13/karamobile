import React, {useEffect, useState} from "react";

function MapExample(props) {
    const {currentUser, markers, circles, center, zoom, height, address} = props
    const mapRef = React.useRef(null);

    const [currentLocation, setCurrentLocation] = useState({lat: 0, lng: 0});
    useEffect(() => {
        geoFindMe()
    },[])

    const geoFindMe = () => {
        const success = (position) => {
            setCurrentLocation({lat: position.coords.latitude, lng: position.coords.longitude})
        }
        const error = () => {
            alert("Unable to retrieve your location");
        }
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success,error);
        }
     }

    useEffect(()=>{
        let container = L.DomUtil.get('map');
        if(container != null){
            container._leaflet_id = null;
        }
        let map = L.map('map').setView([currentLocation.lat, currentLocation.lng], zoom);
        const googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 17,
            subdomains:['mt0','mt1','mt2','mt3'],
            attribution: '<a href="https://maps.google.com">Google Maps</a> &copy; <a href="http://vnptdongthap.com.vn/">VNPT Đồng Tháp</a>'
        }).addTo(map);
        const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        });
        let layerControl = L.control.layers({
            'Cơ bản': googleStreet, // Lớp bản đồ cơ sở
        }, {
            'Vệ tinh': googleSat, // Lớp dữ liệu bổ sung 1
        }).addTo(map);


        L.marker([parseFloat(currentLocation.lat), parseFloat(currentLocation.lng)]).addTo(map)
            .bindPopup("Vị trí hiện tại.").openPopup();

        let isDragging = false;
        map.on('dragstart', function () {
            isDragging = true;
            console.log('dragstart')
        });

        map.on('dragend', function () {
            isDragging = false;
            console.log('dragend')

        });

        map.on('mousemove', function (e) {
            if (isDragging) {
                console.log(e)
                map.setView(e.latlng, map.getZoom(),  { animate: false });
            }
        });

        markers && markers.forEach(marker =>{
            const fontAwesomeIcon = L.divIcon({
                html: '<i class="fa-solid fa-location-dot fa-3x"></i>',
                iconSize: [20, 20],
                className: "text-primary"
            });
            L.marker([parseFloat(marker.lat), parseFloat(marker.lng)],{icon: fontAwesomeIcon}).addTo(map).bindPopup(`<a href="login">${marker.address}</a>`).openPopup();
        })



        map.on('click', function(ev) {
            console.log(ev)
            const fontAwesomeIcon = L.divIcon({
                html: '<i class="fa-solid fa-location-dot fa-bounce fa-3x"></i>',
                iconSize: [20, 20],
                className: "text-red-500"
            });
            L.marker([parseFloat(ev.latlng.lat), parseFloat(ev.latlng.lng)],{ icon:  fontAwesomeIcon}).addTo(map)
                .bindPopup(`<a>Thêm điểm</a>`).openPopup();
        });


        circles && circles.forEach(circle=>{
            L.circle([parseFloat(circle.lat), parseFloat(circle.lng)], {
                color: 'red',
                fillColor: circle.color || '#f03',
                fillOpacity: 0.5,
                radius: circle.radius || 300
            }).addTo(map);
        })

    },[currentLocation])

    return (
        <>
            <div id="map" style={{height:  height}}></div>
        </>
    );
}

export default MapExample;