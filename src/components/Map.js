import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "../index.css";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import london_postcodes from "../london.json";
import kathmandu from "../kthmandu.json";
import nepal_geio from "../nepalgeo.json";
const data = {
  CHITWAN: 1000,
  KATHMANDU: 50,
};
const NepalMap = () => {
  const mapRef = useRef();
  const geojsonRef = useRef();
  const [pos, setPos] = useState({
    lat: 27.6429544,
    lng: 84.5598615,
    zoom: 7,
  });
  const position = [pos.lat, pos.lng];

  function getColor(dis) {
    let d = data[dis];
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  }

  function geoJSONStyle(feature, layer) {
    return {
      color: "black",
      weight: 1,
      fillOpacity: 0.3,
      fillColor: getColor(feature.properties.DISTRICT),
    };
  }

  function onEachFeature(feature, layer) {
    console.log(layer);
    const popupContent = ` <Popup>${feature.properties.DISTRICT}</pre></Popup>`;
    layer.bindPopup(popupContent);
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }

  function zoomToFeature(e) {
    const map = mapRef.current.leafletElement;

    map.fitBounds(e.target.getBounds());
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.8,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    geojsonRef.current.leafletElement.resetStyle(e.target);
  }
  return (
    <div className="nepalmap">
      <Map
        center={position}
        zoom={pos.zoom}
        //  style={{ width: '100%', height: '900px'}}
        ref={mapRef}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          ref={geojsonRef}
          data={nepal_geio}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
        />
      </Map>
    </div>
  );
};

export default NepalMap;
