import { BsDoorOpen } from "react-icons/bs";
import { PiMedalMilitary } from "react-icons/pi";
import { LuCalendarX2 } from "react-icons/lu";

export function IconsReference (){
    return(
        <div>
            <div className="flex pl-4">
        <div className="flex gap-4 items-center pb-4 m-2 w-11/12">
            <div className="pl-6">
                <BsDoorOpen className="w-8 h-8" />
            </div>
            <div >
                <p className="text-lg font-semibold">Llegada autónoma</p>
                <p className="text-base">El personal del edificio te ayudará a hacer el check-in.</p>
            </div>
        </div>
      </div>
      <div className="flex pl-4">
        <div className="flex gap-4 items-center pb-4 m-2 w-11/12">
            <div className="pl-6">
                <PiMedalMilitary className="w-8 h-8" />
            </div>
            <div >
                <p className="text-lg font-semibold"> tiene la categoría de Superanfitrión</p>
                <p className="text-base">Los Superanfitriones son anfitriones experimentados, con evaluaciones excelentes.</p>
            </div>
        </div>
      </div>
      <div className="flex pl-4">
        <div className="flex gap-4 items-center pb-4 m-2 w-11/12 border-b">
            <div className="pl-6">
                <LuCalendarX2 className="w-8 h-8" />
            </div>
            <div >
                <p className="text-lg font-semibold">Cancelación gratuita por 48 horas</p>
                <p className="text-base">Si cambias de opinión, recibirás un reembolso total.</p>
            </div>
        </div>
      </div>
        </div>
    )
}