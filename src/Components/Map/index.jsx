import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: "100%",
  height: "200px",
};

const AppMap = ({ google }) => {
  const [marker, setMarker] = useState({ position: { lat: -7.23718, lng: -39.3222 }, title: 'Destino', name: 'Destino' })

  const handleClick = (t, map, coord) => {
    console.log({ t, map, coord });
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setMarker({
      title: "Destino",
      name: "Destino",
      position: { lat, lng }
    })
  }
  
  return (
        <Map
          google={google}
          zoom={15}
          initialCenter={{ lat: -7.23718, lng: -39.3222 }}
          style={mapStyles}
          onClick={handleClick}
        >
          <Marker
            title={marker.title}
            name={marker.name}
            position={marker.position}
          />
        </Map>
      );
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyDLSKgNC5_CaJHXE4BgM9IJQh3vspTYpJ4',
    }
  ))(AppMap);