import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "./marker-icon.png";


function MyMap({data}){

    return(
        <MapContainer 
          className="map" 
          center={[42.585444, 13.257984]}
          zoom={6}
          style={{height:500, width:"100%"}} 
        >

          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map(data => (
            <Marker key = {data.id} position={[data.latitude, data.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}           >
              <Popup position={[data.latitude, data.longitude]}>
                <div>
                  <h2>{"Name: " + data.name}</h2>
                  <p>{"Status: " + data.status}</p>
                </div>
              </Popup>
            </Marker>
            ))}

        </MapContainer>
    );
}

export default MyMap;