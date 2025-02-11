import { useState } from 'react';
import { Marker, useMapEvents, Tooltip } from 'react-leaflet';
import { defautPos } from '../config/config';
import Weather from './Weather';

const LocationMarker = () => {
  const [position, setPosition] = useState(defautPos);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });

  return (
    <Marker position={position}>
      <Tooltip permanent >
        <Weather location={position} />
      </Tooltip>
    </Marker>
  )
}
export default LocationMarker