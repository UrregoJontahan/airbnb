"use client";
import { useEffect, useState } from "react";
import { fetchRoomsById } from "app/app/services/getRooms";
import { ArrowBack } from "app/components/buttonSearch/mobile/arrowBack/arrowBack";
import { Calification } from "app/components/calification/calification";
import { UserHost } from "app/components/shared/profileUser/userHost/userHost";
import { IconsReference } from "app/components/IconsAdReference/iconsAndReference";
import { InfoRoom } from "app/components/Room-Info-Basic/RoomInfo";
import { ButtonShared } from "app/components/shared/buttonShared/buttonShared";
import { Map } from "app/components/Map/map";
import { ImagesCarouselMobile } from "app/components/imagesCarousel/imagesCarouselMobile";
import { Details } from "app/components/details/details";
import { CalendarReservation } from "app/components/reservation/calendar/calendarReservation";

export default function DetailsRoom({ params }: any) {
  const [room, setRoom] = useState<{
    photos?: string[];
    title?: string;
    description?: string;
    price?: string;
    location?: string;
    capacity?: number;
    amenities?: string[];
    city?: string;
    host?:string;
    coordinates?: [number, number] | { lat: number, lng: number } | undefined
  }>({});

  useEffect(() => {
    const getRoomId = async (id: any) => {
      const response = await fetchRoomsById(id);
      setRoom(response);
    };
    
    getRoomId(params.id);
  }, [params.id]);


  return (
    <div className="mb-20">
      <div className="w-full h-16 md:hidden flex items-center justify-around gap-44">
        <ArrowBack />
        <ButtonShared room={room} />
      </div>
      <ImagesCarouselMobile room={room}/>
      <Details room={room}/>
      <Calification />
      <UserHost host={room.host} />
      <IconsReference />
      <div className="p-6 text-lg border-b ml-4 w-11/12">{room.description}</div>
      <InfoRoom room={room} /> 
        <div className="pl-8">
          <h2 className='text-2xl font-semibold'>A donde iras</h2>
          <p>{room.location}</p>
          <Map coordinates={room.coordinates}/>
        </div>
        {/* <CalendarReservation/> */}
    </div>
  );
}


