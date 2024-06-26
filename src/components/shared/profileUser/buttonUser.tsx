"use client"

import Link from "next/link"
import { useState } from "react"

export function ButtonUser(){
    const [ open , setOpen ] = useState(false)

    const handleOpenBoxUser =()=>{
        setOpen(!open)
        console.log(open)
    }

    return(
            <div>
            <div className="flex w-24 h-12 rounded-full border border-gray-400 mr-20 items-center justify-center gap-4 hover:shadow-xl cursor-pointer" onClick={handleOpenBoxUser}>
                <div className="flex flex-col gap-0.5 pl-1">
                    <span className="w-4 h-0.5 bg-black"></span>
                    <span className="w-4 h-0.5 bg-black"></span>
                    <span className="w-4 h-0.5 bg-black"></span>
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
            {open && (
                <div className="w-40 h-40 absolute top-16 right-16 flex flex-col justify-start p-2">
                    <Link href={"/login"} className="flex">Inicia sesión</Link>
                    <Link href={"/singup"} className="flex">Registrate</Link>
                    <Link href={"/login"}>cerrar sesión</Link>
                </div>
            )}
        </div>
    )
}
