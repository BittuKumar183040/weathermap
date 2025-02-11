import { useState } from 'react';
import { Marker, useMapEvents, Tooltip } from 'react-leaflet';
import Weather from './Weather';

const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });

  return (<>
    {
      position && (
        <Marker position={position}>
          <Tooltip permanent >
            <Weather location={position} />
          </Tooltip>
        </Marker>
      )
    }
  </>
  )
}
export default LocationMarker