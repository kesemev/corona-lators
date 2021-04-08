import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// import teslaData from "../data/tesla-sites.json";
// "../../assets/marker-icon.png"
const insolator = new Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25,25]
});

function MyMap(){

    // const filteredStations = teslaData.filter(tsla => tsla.address.country === "Italy")
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://dc7dcc1d-56f6-477e-8ed5-2e4171628047.mock.pstmn.io/users")
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          return setData(json);
      });
},[]);

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

          {data.map(tsla => (
            <Marker key = {tsla.id} position={[tsla.latitude, tsla.longitude]} icon={insolator}>
              <Popup position={[tsla.latitude, tsla.longitude]}>
                <div>
                  <h2>{"Name: " + tsla.name}</h2>
                  <p>{"Status: " + tsla.status}</p>
                </div>
              </Popup>
            </Marker>
            ))}

          {/* {filteredStations.map(tsla => (
            <Marker key = {tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]}>
              <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
                <div>
                  <h2>{"Name: " + tsla.name}</h2>
                  <p>{"Status: " + tsla.status}</p>
                </div>
              </Popup>
            </Marker>
            ))} */}

        </MapContainer>
    );
}

export default MyMap;