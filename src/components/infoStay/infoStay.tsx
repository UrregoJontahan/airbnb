import { CiHeart } from "react-icons/ci";
import { LuShare } from "react-icons/lu";

export function InfoStay ({room}:any){
    return(
        <div className="mt-6">
            <div className="flex w-full">
                <h1 className="ml-16 text-3xl font-semibold">{room.title}</h1>
                <div className="ml-auto mr-20 flex gap-2">
                    <button className="flex justify-center items-center hover:bg-gray-100 p-1 rounded-lg underline gap-1 font-semibold">
                        <LuShare />compartir</button>
                    <button className="flex justify-center items-center hover:bg-gray-100 p-1 rounded-lg underline gap-1 font-semibold">
                        <CiHeart />Guardar</button>
                </div>
            </div>
        </div>
    )
}