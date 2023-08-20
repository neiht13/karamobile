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
            console.log(JSON.stringify({lat: position.coords.latitude, lng: position.coords.longitude}))
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
        let map = L.map('map').setView([center.lat, center.lng], zoom);
        L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 17,
            subdomains:['mt0','mt1','mt2','mt3'],
            attribution: '<a href="https://maps.google.com">Google Maps</a> &copy; <a href="http://vnptdongthap.com.vn/">VNPT Đồng Tháp</a>'
        }).addTo(map);


        L.control.locate({
            icon: 'fa-solid fa-location-crosshairs', // Icon của nút
            showPopup: false, // Không hiển thị popup khi bấm nút
            metric: false, // Sử dụng đơn vị đo lường hệ thập phân
            strings: {
                title: "Hiển thị vị trí hiện tại"
            },
            onClick: e=> map.setView([parseFloat(currentLocation.lat), parseFloat(currentLocation.lng)], 17)
        }).addTo(map);
        // let isDragging = false;
        // map.on('dragstart', function () {
        //     isDragging = true;
        //     console.log('dragstart')
        // });
        //
        // map.on('dragend', function () {
        //     isDragging = false;
        //     console.log('dragend')
        //
        // });
        //
        // map.on('mousemove', function (e) {
        //     if (isDragging) {
        //         console.log(e)
        //         map.setView(e.latlng, map.getZoom(),  { animate: false });
        //     }
        // });

        markers && markers.forEach(marker =>{
            const fontAwesomeIcon = L.divIcon({
                html: '<i class="fa-solid fa-location-dot fa-3x"></i>',
                iconSize: [20, 20],
                className: "text-primary"
            });
            let m = L.marker([parseFloat(marker.lat), parseFloat(marker.lng)],{icon: fontAwesomeIcon}).addTo(map)
            m.bindPopup(`<a href="login">${marker.address}</a>`).openPopup();
        })
            L.marker([parseFloat(currentLocation.lat), parseFloat(currentLocation.lng)]).addTo(map)
                .bindPopup("Bạn đang ở trong bán kính mét từ điểm này.").openPopup();

        map.locate({setView: true, maxZoom: map.getZoom()});

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
            <button id="find-me" onClick={geoFindMe}>Show my location</button><br />
            <div id="map" style={{height:  height}}></div>
        </>
    );
}

export default MapExample;