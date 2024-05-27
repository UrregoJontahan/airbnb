import { IoBedOutline,IoBed } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

export function InfoRoom ({room}:any){
    return(
        <div>
            <div className="p-6 border-b w-11/12 ml-4">
        <h2 className="text-2xl font-semibold">¿Donde vas a dormir?</h2>
        <div className="w-3/5 p-4 border rounded-lg mt-4">
            <div className="flex gap-4">
                <IoBedOutline className="text-3xl"/>
                <IoBed className="text-3xl"/>
            </div>
            <p className="text-lg font-semibold mt-2">Habitacion</p>
            <p>{room.amenities}</p>
        </div>
      </div>
      <section className="p-4 border-b m-4">
        <h2 className="text-2xl font-semibold pl-6">Lo que este lugar te ofrece</h2>
        <div className="pt-4 pl-6">
            <div className="flex items-center pt-2">
                <div className="flex">
                    <AiFillPicture  className="text-3xl"/>
                </div>
                <p className="flex pl-4 text-lg">Vista a la bahía</p>
            </div>
            <div className="flex items-center pt-2">
                <div className="flex">
                    <GiModernCity  className="text-3xl"/>
                </div>
                <p className="flex pl-4 text-lg">Vista a la bahía</p>
            </div>
            <div className="flex items-center pt-2">
                <div className="flex">
                    <AiFillPicture  className="text-3xl"/>
                </div>
                <p className="flex pl-4 text-lg">Vista a la bahía</p>
            </div>
            <div className="flex items-center pt-2">
                <div className="flex">
                    <FaWifi className="text-3xl"/>
                </div>
                <p className="flex pl-4 text-lg">Vista a la bahía</p>
            </div>
            <div className="flex items-center pt-2">
                <div className="flex">
                    <IoIosRestaurant  className="text-3xl"/>
                </div>
                <p className="flex pl-4 text-lg">Vista a la bahía</p>
            </div>
        </div>
      </section>
        </div>
    )
}