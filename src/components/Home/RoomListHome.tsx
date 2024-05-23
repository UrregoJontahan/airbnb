"use client"

import { fetchRooms } from "app/app/services/getRooms";
import { useEffect, useState } from "react";
import { ImageCarousel } from "./ImageCarousel";
import Link from "next/link";

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
        <div className="w-full h-auto mt-2 flex justify-center">
          <div className="flex flex-wrap justify-center" >
            {rooms.map((room) => (
              <div className="w-72 pl-4">
                <Link href={`/details-room/${room.id}`}>
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
                </Link>
              </div>
            ))}
          </div>
        </div>
    );
}


