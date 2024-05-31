import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/mylocation.png'; // Import the custom marker image
import markerShadow from 'leaflet/dist/images/marker-shadow.png'; // Import the marker shadow image

function Map() {
  const center = [21.010010, 105.849800]; // Set the center coordinates
  // Create a custom icon for the marker using the custom marker image
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
  });

  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={customIcon} /> // Use the custom icon for the marker
    </MapContainer>
  );
}

export default Map;