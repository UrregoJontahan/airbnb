import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { ButtonShared } from "../shared/buttonShared/buttonShared";

interface ImageCarouselProps {
  photos: string[];
  alt: string;
  room: {
    id: string;
    title: string;
    location: string;
    _id: string;
  };
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ photos, alt, room }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleBackImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full h-80 flex items-center overflow-hidden rounded-lg flex-col relative cursor-pointer group md:w-64 md:h-64">
      <Link
        href={`/room-details/${room._id}`}
        className="w-full h-full group-hover:opacity-100 transition-opacity pt-4"
      >
        <div className="relative w-full h-full">
          {photos.map((photo, index) => (
            <Image
              key={`photo-${room.id}-${index}`}
              src={photo}
              alt={alt}
              fill
              className={`absolute top-0 left-0 w-full h-full rounded-xl flex transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"
              }`}
            />
          ))}
        </div>
      </Link>
      {photos.length > 1 && (
        <div className="absolute bottom-2 flex justify-center w-full items-center">
          {photos.map((_, index) => (
            <FaCircle
              key={`dot-${room.id}-${index}`}
              className={`mx-1 text-white cursor-pointer ${
                currentIndex === index ? "text-opacity-100 text-sm" : "text-opacity-50 text-xs"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
      {photos.length > 1 && (
        <>
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
        </>
      )}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-2">
        <ButtonShared room={room} />
      </div>
    </div>
  );
};
