import React, { useState } from "react";
// import Header from "components/Header";

import L from "leaflet";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
iconRetinaUrl:
"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
iconUrl:
"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
shadowUrl:
"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const DrawMap = () => {
const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
const ZOOM_LEVEL = 12;
const mapRef = useRef();

const _created = (e) => console.log(e);

return (

    <div className="row">
    <div className="col text-center">
        <h2>React-leaflet - Draw shapes on map</h2>

        <div className="col">
        < Map style={{height:"400px"}}center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <FeatureGroup>
            <EditControl>
                position="topright"
                onCreated={_created}
                draw={
                {
                rectangle: false,
                circle: false,
                circlemarker: false,
                marker: false,
                polyline: false, 
                }}
                </EditControl> 
            
            </FeatureGroup> 
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
        </ Map>
        </div>
    </div>
    </div>

);
};

export default DrawMap;