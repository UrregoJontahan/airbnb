import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});


export function Details ({room}:any){
    return(
        <div className="w-full flex justify-center flex-col md:ml-16 pl-2">
        <h1 className={`${roboto.className} text-3xl pt-4 pl-4 md:hidden`}>{room.title}</h1>
        <h1 className={`${roboto.className} hidden md:text-3xl md:pt-4 pl-4 md:pl-0 md:block`}>{room.description}</h1>
        <ul>
          <div className="flex flex-row flex-nowrap items-center font-semibold pt-1 md:hidden">
            <li className="pl-4 md:pl-0">{room.city}</li>
            <li className="pl-4 md:pl-0">{room.capacity} huéspedes</li>
          </div>
          {room.amenities && room.amenities.length > 0 && (
            <li className="pt-2 md:text-lg pl-4 md:pl-0">
              {room.amenities.join(" , ")}
            </li>
          )}
        </ul>
      </div>
    )
}