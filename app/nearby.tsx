'use client'

import { useEffect, useState } from 'react';
import ReactMapGL, {
    Marker,
    Source,
    Layer,
    NavigationControl, GeolocateControl
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Nearby() {

    const token = process.env.MAPBOX_TOKEN

    const [viewport, setViewport] = useState({
        latitude: 41.948437,
        longitude: -87.655334,
        zoom: 17,
    });

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const hasRequisite = "serviceWorker" in navigator && "geolocation" in navigator;

        if (hasRequisite) {

        } else {
            console.info("Geolocation is not supported");
        }
    }, []);

    return (
        <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v12" {...viewport}
            mapboxAccessToken={token}
            initialViewState={viewport}
            onMove={(event) => { setViewport(event.viewState) }}
            minZoom={15}
            maxZoom={19}
            style={{ width: '100%', height: '100vh' }}
            dragPan>
            <NavigationControl showCompass showZoom position="top-right" />
            <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation />
        </ReactMapGL>
    )
}