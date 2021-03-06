import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";
import { FiPlus } from "react-icons/fi";
import mapMarker from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "../styles/pages/places.css";

function Places() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ribeirão das Neves</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-19.7675069, -44.0675008]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-place">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default Places;
