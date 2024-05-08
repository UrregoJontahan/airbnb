"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ScreenSearchPlace } from "./screenSearchPlace/screenSearchPlace";

export const ButtonSearchPlace = () => {

    const [ open , setOpen ] = useState(false)

    const handleClickClosed = () => {
        setOpen(false)
    }

    const handleClick = (e:any) =>{
        setOpen(true)
    }

    return(
        <div className="w-full flex justify-center">
            <div className="flex w-full p-8 justify-center bg-blue-500">
            <button onClick={handleClick} className="h-16 flex rounded-full border flex-wrap justify-center items-center ">
    <div className="flex flex-col">
        <div className="flex flex-wrap">
            <span className="text-xl">¿A donde quieres ir?</span>
            <span className="text-base text-gray-400 flex-shrink-0 overflow-hidden whitespace-nowrap">En cualquier lugar del mundo</span>
            <span className="text-base text-gray-400 pl-2 flex-shrink-0 overflow-hidden whitespace-nowrap">·cualquier semana</span>
            <span className="text-base text-gray-400 pl-2 flex-shrink-0 overflow-hidden whitespace-nowrap">·¿Cuántos?</span>
        </div>
    </div>
    <div className="ml-6">
        <button className="flex flex-wrap h-12 w-12 rounded-full text-base items-center justify-center mr-2 text-white bg-pink-600">
            <FaSearch />
        </button>
    </div>
</button>


            </div>
            {open && 
                <div>
                    <button className="text-3xl h-16 w-16 border-2 absolute top-10 left-10 z-10 rounded-full borde">
                    x</button>
                    <ScreenSearchPlace/>
                </div>
            }
        </div>

    )
}




