"use client";
import { useEffect, useState } from "react";
import { fetchRoomsById } from "app/app/services/getRooms";
import { ImagesCarouselMobile } from "app/components/imagesCarousel/imagesCarouselMobile";
import { InfoStay } from "app/components/infoStay/infoStay";
import { StayImages } from "app/components/imagesCarousel/images/images";
import { RoomInfoHeader } from "app/components/roomInformationHeader/roomInfoHeader";
import { ReservationSection } from "app/components/reservationSection/ReservationSection";
import { InformationRoom } from "app/components/informationRoom/informationRoom";
import { HeaderInfoRoomMobile } from "app/components/buttonSearch/mobile/headerInfoRoom/headerInfoRoom";

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
    <div className="mb-20 flex justify-center">
      <div className="md:w-8/12 flex flex-col border">
        <div className="ml-12 mr-12 md:hidden">
          <HeaderInfoRoomMobile/>
        </div>
      <div className="hidden md:block">
        <RoomInfoHeader/>
      </div>
      <div className="md:hidden">
        <ImagesCarouselMobile room={room}/>
      </div>
      <div className="hidden md:block">
        <InfoStay room={ room }/>
      </div>
        <div className="hidden md:block">
          <StayImages photos={room.photos}/>
        </div>
        <div className="flex ml-8 md:ml-0">
            <InformationRoom room={room}/>
            <div className="ml-auto mr-12">
              <ReservationSection room={room}/>
            </div>
        </div>
      </div>
    </div>
  );
}


