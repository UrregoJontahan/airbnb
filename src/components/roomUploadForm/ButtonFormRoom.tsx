"use client"
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

export function ButtonRommForm (){
    return(
        <div 
            className="mt-5 relative right-5">
            <Link href={"/form-room"} className="flex w-auto h-10 rounded-full items-center hover:shadow-md hover:bg-gray-100 cursor-pointer">
                <p className="p-1 text-base font-semibold">Pon tu espacion en Airbnb </p>
                <TbWorld className="text-xl m-2"/>
            </Link>
        </div>    
    )
}