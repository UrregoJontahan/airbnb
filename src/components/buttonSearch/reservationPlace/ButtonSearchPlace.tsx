"use client";
import { FaSearch } from "react-icons/fa";
import { ButtonSearchMobile } from "../mobile/buttonSearchMobile";
import { useRef, useEffect, useState } from "react";
import { ContainerMaps } from "./containerMap";
import { SuggestionLocation } from "./suggestionLocation/suggestionLocation";
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { NumberOfPeopleForm } from "../numberOfPeopleForm/numberOfPeopleForm";
import { LocationSearchInput } from "../locationSearchInput/locationSearchInput";
import { ArriveDeparture } from "../ReservationDates/componentsArriveDeparture/ArriveDepartureComponents";
import { ButtonSearchSmall } from "../buttonSearchSmall/buttonSearchSmall";
import { motion } from "framer-motion";

export const ButtonSearchPlace = () => {
  const {
    openWhere,
    address,
    openArrive,
    openExit,
    showSuggestions,
    exploreDestinations,
    setOpenWhere,
    setOpenarrive,
    setShowSuggestions,
    setAddress,
    setOpenExit,
    setExploreDestinations,
    scrolledY,
    setScrolledY,
  } = useStore();

  
  const whereRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleScroll = () =>{
      setScrolledY(window.scrollY > 5)
    }
    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  console.log(scrolledY)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        whereRef.current && !whereRef.current.contains(e.target as Node) &&
        calendarRef.current && !calendarRef.current.contains(e.target as Node)
      ) {
        setOpenarrive(false);
        setOpenWhere(false);
        setShowSuggestions(false);
        setOpenExit(false);
        setExploreDestinations(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickWhere = () => {
    setOpenWhere(!openWhere);
    setOpenarrive(false);
    setShowSuggestions(false);
    setExploreDestinations(false);
    setOpenExit(false);
  };

  const handleClickExploreDestinations = () => {
    setExploreDestinations(true);
    setOpenarrive(false);
    setOpenWhere(false);
    setShowSuggestions(false);
    setOpenExit(false);
  };

  return (
    <div ref={calendarRef} >
      <div className="hidden md:block md:border-b md:pb-4 bg-white">
        { scrolledY ? 
          <motion.div
            initial={{opacity:0}}
            animate={{opacity: scrolledY ? 100 : 0 }} 
            transition={{duration:7}}
          >
            <ButtonSearchSmall/>
          </motion.div>
         : 
         <motion.div
         initial={{opacity:100}}
         animate={{opacity: scrolledY ? 0 : 1 }} 
         transition={{duration:0.1}}
         className="flex justify-center mt-4 bg-white">
         <div className="w-auto">
           <div ref={whereRef} className={`flex flex-row items-center border border-gray-200 rounded-full h-16 shadow-md shadow-neutral-300
             ${openWhere && `bg-gray-100`} ${openArrive && `bg-gray-100`} ${openExit && `bg-gray-100`} ${exploreDestinations && `bg-gray-100`}
           `}>
             <span
               className={`${!openWhere && "input-place text-sm font-semibold w-72 h-full pt-3 pl-8 rounded truncate flex flex-col hover:bg-gray-300 hover:rounded-full border-r border-gray-100 cursor-pointer"}
                ${openWhere && "rounded-full shadow-lg bg-white hover:bg-none text-sm font-semibold w-80 h-full border-none pt-3 pl-8 truncate flex flex-col hover:rounded-full border-r border-gray-300"}
                ${openArrive && "border-none"} ${openExit && `border-none`} ${exploreDestinations && "border-none"} ${openWhere && "border-none"}
                `}
               onClick={handleClickWhere}
             >
               Dónde
               <LocationSearchInput/>  
             </span>
             {showSuggestions ? (
               <SuggestionLocation address={address} setAddress={setAddress} />
             ) : (
               openWhere && <ContainerMaps />
             )}
               <ArriveDeparture/>
             <div className={`${!exploreDestinations && "hover:bg-gray-300 rounded-full h-full flex gap-6 cursor-pointer w-auto"}
               ${exploreDestinations && "bg-white rounded-full h-full flex gap-12 shadow-md w-auto"}`}
               onClick={handleClickExploreDestinations}>
               <span className="w-50 text-sm flex flex-col pt-3 pl-4 font-semibold rounded truncate">
                 Quién
                 <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis">
                   Explora destinos
                 </p>
               </span>
               {exploreDestinations && <NumberOfPeopleForm />}
               <div className="flex justify-center items-center pl-8">
                 {openWhere || openArrive || openExit || exploreDestinations ?
                   <button className="flex h-12 w-32 rounded-full items-center justify-center group-hover:opacity-100 
                   transition-opacity text-white bg-custom-pink hover:bg-pink-700 cursor-pointer mr-4 ">
                     <p className="font-semibold flex gap-3 items-center">Buscar <FaSearch /></p>
                   </button> :
                   <button className="flex h-12 w-12 rounded-full items-center justify-center text-white bg-custom-pink hover:bg-pink-700 cursor-pointer mr-2 ">
                     <FaSearch />
                   </button>
                 }
               </div>
             </div>
           </div>
         </div>
       </motion.div>
        }
      </div>
      <div className="md:hidden">
        <ButtonSearchMobile />
      </div>
    </div>
  );
};
