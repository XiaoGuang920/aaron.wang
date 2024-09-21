import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';

import brain from '../images/brain.svg';

function Map({ latitude, longitude })
{
    const [position, setPosition] = useState([latitude, longitude]);

    const custom_icon = L.icon({
        iconUrl: brain,
        iconSize: [80, 80], // 圖標的大小
        iconAnchor: [45, 50], // 圖標的錨點，對應於圖標放置時地圖上的位置
        popupAnchor: [-3, -80], // 彈出窗口的錨點
    });

    return (
        <div className="map-frame">
            <MapContainer
                center={position}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={custom_icon}>
                    {/* <Popup>在此為您服務～</Popup> */}
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
