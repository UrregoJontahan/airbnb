"use client"
import { FaSearch } from "react-icons/fa";

export const ButtonSearchPlace = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-2/4">
        <div className="flex flex-row items-center  border border-gray-300 rounded-full h-16 pl-4 pr-4 shadow-lg shadow-neutral-300 ">
          <span className="text-xs sm:text-sm w-64 h-full pt-3 sm:mb-0 sm:mr-2 rounded truncate hover:bg-gray-200 hover:rounded-full border-r border-gray-300 pl-4 ">
            Dónde
            <p className="text-base sm:text-sm overflow-hidden whitespace-nowrap overflow-ellipsis truncate">
              Explora destinos
            </p>
          </span>
          <span className="text-xs sm:text-sm w-40 h-full pt-3 pl-4 mb-2 sm:mb-0 sm:mr-2 p-1  rounded truncate hover:bg-gray-200 border-r border-gray-300 hover:rounded-full">
            Llegada
            <p className="text-base sm:text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
              Explora destinos
            </p>
          </span>
          <span className="text-xs sm:text-sm w-40 mb-2 h-full pt-3 pl-4 sm:mb-0 sm:mr-2 p-1 rounded truncate hover:bg-gray-200 border-r border-gray-300 hover:rounded-full">
            Salida
            <p className="text-base sm:text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
              Explora destinos
            </p>
          </span>
          <span className="text-xs sm:text-sm w-64 pl-4 mb-2 h-full pt-3  sm:mb-0 sm:mr-2 p-1 rounded truncate hover:bg-gray-200 hover:rounded-full">
            Quién
            <p className="text-base sm:text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
              Explora destinos
            </p>
          </span>
          <div className="flex justify-end">
            <button className="flex h-12 w-12 rounded-full items-center justify-center text-white bg-pink-600 hover:bg-pink-700 cursor-pointer ">
                <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// return(
//     <div className="w-full flex justify-center">
//         <div className="flex w-full justify-center">
//             <div className="h-16 flex rounded-full border border-gray-300 flex-wrap justify-center items-center w-3/5">
//                 <div className="flex flex-col">
//                     <div className="flex flex-row flex-nowrap gap-x-2">
//                         <span className="text-xs bg-blue-600 w-48">Dónde
//                             <p className="text-base">Explora destinos</p>
//                         </span>
//                         <span className="text-base bg-blue-600 w-40">Llegada
//                             <p className="text-base">Explora destinos</p>
//                         </span>
//                         <span className="text-base bg-blue-600 w-40">salida
//                             <p className="text-base">Explora destinos</p>
//                         </span>
//                         <span className="text-base bg-blue-600 w-40">Quién
//                             <p className="text-base">Explora destinos</p>
//                         </span>
//                         <button className=" flex h-12 w-12 rounded-full items-center justify-center text-white bg-pink-600 hover:bg-pink-700 cursor-pointer">
//                             <FaSearch />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )
// }



