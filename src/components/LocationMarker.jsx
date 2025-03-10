import { useState } from 'react';
import { Marker, useMapEvents, Tooltip } from 'react-leaflet';
import Weather from './Weather';

const LocationMarker = ({ city, setCity }) => {
  const [position, setPosition] = useState({ "lng": 85.0925, "lon": 85.0925, "lat": 25.5894 });
  const [locationMarker, setLocationMarker] = useState(null);
  useMapEvents({
    click(e) {
      let searchBar = document.getElementById('searchBar');
      if (document.activeElement === searchBar) {
        return;
      } else {
        setCity(null);
        setLocationMarker(null);
        setPosition(e.latlng);
      }

    }
  });
  return (<>
    {
      position && (
        <Marker position={locationMarker ? locationMarker : position}>
          <Tooltip permanent >
            <Weather location={position} city={city} setLocationMarker={setLocationMarker} />
          </Tooltip>
        </Marker>
      )
    }
  </>
  )
}
export default LocationMarker