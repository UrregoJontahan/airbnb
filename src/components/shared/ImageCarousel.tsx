import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { ButtonShared } from "./buttonShared/buttonShared";

interface ImageCarouselProps {
  photos: string[];
  alt: string;
  room: {
    id: number;
    title: string;
    location: string;
    _id:string
  };
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ photos, alt, room}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleBackImage = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - 1;

      if (newIndex < 0) {
        newIndex = photos.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div className="w-64 h-64 flex items-center overflow-hidden rounded-lg flex-col relative cursor-pointer group">
      <Link href={`/room-details/${room._id}`} className="w-full h-full group-hover:opacity-100 transition-opacity pt-4">
        <Image
          src={photos[currentIndex]}
          alt={alt}
          fill
          className="w-full h-full rounded-xl"
          key={room.id}
        />
      </Link>
      {photos.length > 1 && (
        <div className="absolute bottom-2 flex justify-center w-full items-center">
          {photos.map((_, index) => (
            <FaCircle
              key={index}
              className={`mx-1 text-white text-opacity-${currentIndex === index ? "200" : "50"} cursor-pointer text-${currentIndex === index ? "sm":"xs"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
      {photos.length > 1 && (
        <div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white px-2 py-1 text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handleNextImage}
          >
            <FaCircleArrowRight />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white px-2 py-1 text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handleBackImage}
          >
            <FaCircleArrowLeft />
          </button>
        </div>
      )}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-2">
        <ButtonShared room={room}/>
      </div>
    </div>
  );
};

