"use client";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { fetchRoomsById } from "app/app/services/getRooms";
import { ArrowBack } from "app/components/mobile/arrowBack/arrowBack";
import { Calification } from "app/components/calification/calification";
import { UserHost } from "app/components/shared/profileUser/userHost/userHost";
import { IconsReference } from "app/components/IconsAdReference/iconsAndReference";
import { InfoRoom } from "app/components/Room-Info-Basic/RoomInfo";
import Image from "next/image";
import { ButtonShared } from "app/components/shared/buttonShared/buttonShared";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export default function DetailsRoom({ params }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [room, setRoom] = useState<{
    photos?: string[];
    title?: string;
    description?: string;
    price?: string;
    location?: string;
    capacity?: number;
    amenities?: string[];
    city?: string;
  }>({});

  useEffect(() => {
    const getRoomId = async (id: any) => {
      const response = await fetchRoomsById(id);
      setRoom(response);
    };
    
    getRoomId(params.id);
  }, [params.id]);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (room.photos?.length || 1));
  };

  const handleBackImage = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (room.photos) {
        if (newIndex < 0) {
          newIndex = room.photos.length - 1;
        }
      }
      return newIndex;
    });
  };

  return (
    <div>
      <div className="w-full h-16 md:hidden flex items-center justify-around gap-56">
            <ArrowBack />
            <ButtonShared room={room} />
      </div>
      <div className="md:hidden">
        <div className="absolute lg:hidden">
        </div>
        {room.photos && room.photos.length > 0 && (
          <Image
            src={room.photos[currentIndex]}
            alt={room.title || "Room image"}
            width={500}
            height={500}
            className="w-full"
          />
        )}
      </div>
      <div className="w-full md:hidden flex justify-center flex-col">
        <h1 className={`${roboto.className} text-3xl pt-4 pl-4`}>{room.title}</h1>
        <ul>
          <div className="flex flex-row flex-nowrap items-center font-semibold pt-1">
            <li className="pl-4">{room.city}</li>
            <li className="pl-4">{room.capacity} huéspedes</li>
          </div>
          {room.amenities && room.amenities.length > 0 && (
            <li className="pl-4 pt-2">
              {room.amenities.join(", ")}
            </li>
          )}
        </ul>
      </div>
      <Calification />
      <UserHost />
      <IconsReference />
      <div className="p-6 text-lg border-b ml-4 w-11/12">{room.description}</div>
      <InfoRoom room={room} />
      <div>¿Dónde irás?</div>
    </div>
  );
}
