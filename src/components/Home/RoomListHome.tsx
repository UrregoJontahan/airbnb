"use client"

import { fetchRooms } from "app/app/services/getRooms";
import { useEffect, useState } from "react";
import { ImageCarousel } from "../imagesCarousel/ImageCarousel";

export function RoomList() {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        setRooms(data);
      } catch {
        console.log("Error al obtener las habitaciones");
      }
    };
    getRooms();
  }, []);

  return (
        <div className="w-full h-auto md:mt-2 flex md:justify-center mb-8">
          <div className="flex flex-wrap pl-5 md:justify-center" >
            {rooms.map((room) => (
              <div className="w-11/12 md:w-72 md:pl-4" key={room.id}>
                <>
                {room.photos.length > 0 && (
                  <>
                    <ImageCarousel photos={room.photos} alt={room.title} room={room} />
                    <div className="p-2 w-full">
                      <p className="font-semibold">{room.location}</p>
                      <p className="text-base">{room.city}</p>
                      <p className="text-base font-semibold flex gap-1">
                        ${room.price} <span className="font-normal">noche</span>
                      </p>
                    </div>
                  </>
                )}
                </>
              </div>
            ))}
          </div>
        </div>
    );
}