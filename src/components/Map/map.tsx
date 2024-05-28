import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1Ijoiamhvbm5hdGhhbjU5OCIsImEiOiJjbHdwYnRmdTcxamVnMmtuZjF3NXY4cG00In0.t35oG0Oy5yh3uEscxsp87Q";

export const Map: React.FC<{ coordinates?: [number, number] | { lat: number, lng: number } | undefined }> = ({coordinates}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (map.current || !coordinates) return;

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: Array.isArray(coordinates) ? coordinates : [coordinates.lng, coordinates.lat],
        zoom: 15,
      });
      
      marker.current = new mapboxgl.Marker()
      .setLngLat(Array.isArray(coordinates) ? coordinates : [coordinates.lng, coordinates.lat])
      .addTo(map.current);

      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend(marker.current.getLngLat());
      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom:15, 
      });
    }
  }, [coordinates]);

  return (
    <div className='mt-4'>
      <div className='w-11/12 h-72 rounded-lg shadow-md box-border overflow-hidden mt-4' ref={mapContainer} />
    </div>
  );
};

export default Map;









