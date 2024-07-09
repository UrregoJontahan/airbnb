"use client"
import { FaAirbnb } from "react-icons/fa";
import {Mulish} from "next/font/google"
import Link from "next/link";

const mulish = Mulish({
    weight: ["800"],
    subsets: ["latin"]
  })
  
export function Logo(){
    return(
       <div className="hidden md:block">
            <Link href={"/"} className="flex flex-row flex-nowrap list-none relative font-bold text-custom-pink left-0 lg:left-14 p-6 mt-4">
                <FaAirbnb className="text-4xl"/>
                <span className={`${mulish.className} text-2xl font-bold hidden md:block lg:hidden`}>airbnb</span>
                <span className={`${mulish.className} text-2xl font-bold hidden lg:block`}>airbnb</span>
            </Link>
       </div>
    )
}