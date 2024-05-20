import Image from "next/image";
import React, { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

interface ImageCarouselProps {
  photos: string[];
  alt: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ photos, alt }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0); 

  const handleNextImage = () =>{
    setCurrentIndex(( prevIndex )=>( prevIndex + 1) % photos.length)
  }

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
    <div className="w-72 h-72 flex items-center overflow-hidden rounded-lg flex-col relative cursor-pointer group">
        <div className="w-full h-full group-hover:opacity-100 transition-opacity">
            <Image
                src={photos[currentIndex]}
                alt={alt}
                width={300}
                height={300}
                className="w-full h-full"
            />
        </div>
       {photos.length > 1 ? 
       <div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white px-2 py-1 text-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleNextImage}
            >
                <FaCircleArrowRight />
            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white px-2 py-1 text-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleBackImage}
            >
                <FaCircleArrowLeft />
            </button> 
            </div>  : "" } 
    </div> 
  );
};