import React, { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "../../../env";
import styles from "./Map.module.css";

const Map = (props) => {
  const { style, className, center, zoom } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      mapContainerClassName={`${styles.map} ${className}`}
      zoom={zoom}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
