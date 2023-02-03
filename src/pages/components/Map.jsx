//App.js
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../styles/location.scss"
// TomTom SDK
// import * as tt from "@tomtom-international/web-sdk-maps";
// styles
// import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

function Map() {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const AMSTERDAM = { lon: 4.896029, lat: 52.371807 };


  useEffect(() => {
    let map = tt.map({
      key:"dG9eRO0wLQrVeZSIfhO9kLhdWEcRisGp",
      container: mapElement.current,
    language: language,
    style: { map: style },
    center: [mapLongitude, mapLatitude],
    zoom: mapZoom,
    });
    setMap(map);
    setInitialized(true);
    return () => map.remove();
  }, []);


  return (
     <div ref={mapElement} className="mapDiv" />
  );
}
export default Map;