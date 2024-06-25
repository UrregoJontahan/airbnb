"use client";

import { locationAutoComplete } from "app/app/services/locations/locations";
import { LoaderSearch } from "app/components/loaderSearch/loaderSearch";
import { useEffect, useState } from "react";
import { MdOutlinePlace } from "react-icons/md";

export function SuggestionLocation({ address, setAddress }: any) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
      getSuggestionLocation(address);
  }, [address]);

  const getSuggestionLocation = async (query: any) => {
    try {
      const data = await locationAutoComplete(query);
      setSuggestions(data);
    } catch (error) {
      console.error("Error al obtener sugerencias de direcciones:", error);
    }
  };

  const handleSelectSuggestion = (place: any) => {
    setAddress(place);
    setSuggestions([]);
  };

  return (
    <div className="md:w-1/4 md:h-2/5 md:bg-white md:absolute md:z-20 md:top-36 md:mt-2 md:rounded-3xl md:border md:border-gray-300 md:shadow-xl md:overflow-hidden
      w-screen h-screen
    ">
      {suggestions.map((place, index) => (
        <ul key={index} className="m-4">
          <li onClick={() => handleSelectSuggestion(place)} className="p-2 hover:bg-gray-100 cursor-pointer text-black flex truncate text-ellipsis">
           <div className="flex w-8 h-8 items-center justify-center bg-gray-300 rounded-lg">
                <MdOutlinePlace className="" />
            </div> 
            <p className="truncate text-ellipsis ml-4">{place}</p>
          </li>
        </ul>
      ))}
      {suggestions.length === 0 && 
        <div className="flex justify-center items-center mt-40 mr-16 md:none"><LoaderSearch/></div>
      }
    </div>
  );
}

