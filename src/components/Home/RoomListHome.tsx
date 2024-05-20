"use client"

import { fetchRooms } from "app/services/getRooms";
import { useEffect, useState } from "react";
import Image from "next/image";

export function RoomList() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        setCurrentImageIndexes(Array(data.length).fill(0));
        setRooms(data);
      } catch {
        console.log("Error al obtener las habitaciones");
      }
    };
    getRooms();
  }, []);

  const handleNextImage = (roomIndex: number) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      if (rooms[roomIndex].photos.length > 0) {
        newIndexes[roomIndex] =
          (newIndexes[roomIndex] + 1) % rooms[roomIndex].photos.length;
      }
      return newIndexes;
    });
  };

  return (
    <div className="w-full h-auto mt-2">
      <div className="flex flex-wrap justify-center gap-8">
        {rooms.map((room, index) => (
          <div key={room.id}>
            {room.photos.length > 0 && (
              <div className="w-72">
                <div className="w-72 h-72 flex items-center overflow-hidden rounded-lg flex-col relative">
                  <div className="w-full h-full">
                    <Image
                      src={room.photos[currentImageIndexes[index]]}
                      alt={room.title}
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                  <button
                    className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded"
                    onClick={() => handleNextImage(index)}
                  >
                    Siguiente
                  </button>
                </div>
                <div>
                  <p className="font-semibold">{room.location}</p>
                  <p className="text-base font-semibold flex gap-1">
                    ${room.price} <span className="font-normal">noche</span>{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


