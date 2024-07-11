"use client"
import { BiBuildingHouse } from "react-icons/bi";
import { BsTicketPerforated } from "react-icons/bs";
import { GiTreehouse } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { GiWoodCabin } from "react-icons/gi";
import { RiLandscapeLine } from "react-icons/ri";
import { GiFamilyHouse } from "react-icons/gi";

export function Icons() {
  return (
    <div className={`w-full h-16 flex md:justify-center bg-white border-t mt-4`}>
      <div className={`h-14 overflow-hidden md:w-full`}>
        <div className={`flex justify-center p-2 w-full border-b md:border-b-0 pt-6 border-gray-300 overflow-x-auto bg-scroll`}>
          <div className={`flex space-x-4 md:space-x-20 md:ml-20 relative left-40 md:left-0 `}>
            <BiBuildingHouse className="text-2xl text-gray-600 hover:cursor-pointer" />
            <BsTicketPerforated className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiTreehouse className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiPalmTree className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiWoodCabin className="text-2xl text-gray-600 hover:cursor-pointer" />
            <RiLandscapeLine className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiFamilyHouse className="text-2xl text-gray-600 hover:cursor-pointer" />
            <BiBuildingHouse className="text-2xl text-gray-600 hover:cursor-pointer" />
            <BsTicketPerforated className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiTreehouse className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiPalmTree className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiWoodCabin className="text-2xl text-gray-600 hover:cursor-pointer" />
            <RiLandscapeLine className="text-2xl text-gray-600 hover:cursor-pointer" />
            <GiFamilyHouse className="text-2xl text-gray-600 hover:cursor-pointer" />
          </div>
      </div>
      </div>
    </div>
  );
}

