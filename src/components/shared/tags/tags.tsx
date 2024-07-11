"use client"
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { motion } from "framer-motion"

export function Tags (){

    const { scrolledY } = useStore()

    return(
       <div className="hidden md:block">
            <motion.div
                initial={{opacity:100, y:0}}
                animate={{opacity: scrolledY ? 0 : 1,
                    y: scrolledY ? -50 : 0
                }}
                transition={{duration:0.3}}
                className={`flex flex-row flex-nowrap list-none pl-16 pt-3 ${scrolledY && "hidden"}`}>
                <ul className="flex flex-row flex-nowrap list-none gap-x-9 mx-auto relative left-16 justify-center text-base text-gray-500 m-10">
                    <li className=" hover:text-black cursor-pointer text-lg">Estadias</li>
                    <li className=" hover:text-black cursor-pointer text-lg ">Experiencias</li>
                </ul>
            </motion.div>
        </div>
    )
}