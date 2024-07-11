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
    <div className={`w-full h-16 flex md:justify-center bg-white md:border-t mb-8`}>
      <div className={`h-16 bg-white overflow-y-hidden border-b md:border-b-0 shadow-sm md:shadow-none md:w-full md:mt-4 flex`}>
        <div className={`flex justify-center w-full overflow-x-auto bg-scroll ml-8 md:ml-0 items-center`}>
          <div className={`flex space-x-4 ml-40 mt-2 md:space-x-6 md:ml-20 relative left-48 md:left-0 pl-20 pr-16 md:pl-0 md:pr-0 justify-center `}>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <BsTicketPerforated className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">iconicos</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <BiBuildingHouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">apartamentos</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiTreehouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">casas del arbol</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiPalmTree className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">cabañas</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiWoodCabin className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">piscinas increibles</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <RiLandscapeLine className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap">mini casas</p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiFamilyHouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <BiBuildingHouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <BsTicketPerforated className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiTreehouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiPalmTree className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiWoodCabin className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <RiLandscapeLine className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
            <div className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
              <GiFamilyHouse className="text-3xl text-gray-600 hover:cursor-pointer" />
              <p className="text-sm font-semibold whitespace-nowrap"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
