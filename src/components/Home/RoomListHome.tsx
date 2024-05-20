"use client"

import { fetchRooms } from "app/app/services/getRooms";
import { useEffect, useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

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
        <div className="w-full pl-16 pr-16 h-auto mt-2">
          <div className="flex flex-wrap justify-center">
            {rooms.map((room) => (
              <div key={room.id} className="w-72">
                {room.photos.length > 0 && (
                  <>
                    <ImageCarousel photos={room.photos} alt={room.title} />
                    <div>
                      <p className="font-semibold">{room.location}</p>
                      <p className="text-base font-semibold flex gap-1">
                        ${room.price} <span className="font-normal">noche</span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
    );
}


