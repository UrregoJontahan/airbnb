"use client"

import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

export function ImagesCarouselMobile ({room}:any){
    const [startX, setStartX] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex ]= useState(0)

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartX(event.touches[0].clientX);
      };
    
    
      const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (room.photos?.length || 1));
      };
    
      const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        const endX = event.changedTouches[0].clientX;
        const deltaX = endX - (startX || 0);
        if (deltaX > 50) {
          handleBackImage();
        } else if (deltaX < -50) {
          handleNextImage();
        }
        setStartX(null);
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

    return(
        <div className="md:hidden">
        <div className="absolute lg:hidden">
        </div>
        {room.photos && room.photos.length > 0 && (
          <div  className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd} >
            <Image
              src={room.photos[currentIndex]}
              alt={room.title || "Room image"}
              width={500}
              height={500}
              className="w-full h-72"
            />
            <div className="absolute bottom-2 flex justify-center w-full items-center">
             {room.photos?.map((_:any, index:any) => (
               <FaCircle
                 key={index}
                 className={`mx-1 text-white text-opacity-${currentIndex === index ? "200" : "50"} cursor-pointer text-${currentIndex === index ? "sm":"xs"}`}
                 onClick={() => setCurrentIndex(index)}
               />
             ))}
           </div>
          </div>   
        )}
      </div>
    )
}