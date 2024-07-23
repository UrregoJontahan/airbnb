import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1Ijoiamhvbm5hdGhhbjU5OCIsImEiOiJjbHdwYnRmdTcxamVnMmtuZjF3NXY4cG00In0.t35oG0Oy5yh3uEscxsp87Q";

export const MapRoomsHome = ({rooms}:any) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ -74.05369, 4.727039],
        zoom: 14,
      });
    }

    rooms.forEach((room:any) => {
        console.log(room.coordinates)
        new mapboxgl.Marker()
        .setLngLat(room.coordinates)
        .addTo(map.current!);
      });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);


  return (
        <div className="w-full h-full" ref={mapContainer} />
  );
};

export default MapRoomsHome;









