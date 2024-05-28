import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});


export function Details ({room}:any){
    return(
        <div className="w-full md:hidden flex justify-center flex-col">
        <h1 className={`${roboto.className} text-3xl pt-4 pl-4`}>{room.title}</h1>
        <ul>
          <div className="flex flex-row flex-nowrap items-center font-semibold pt-1">
            <li className="pl-4">{room.city}</li>
            <li className="pl-4">{room.capacity} huéspedes</li>
          </div>
          {room.amenities && room.amenities.length > 0 && (
            <li className="pl-4 pt-2">
              {room.amenities.join(", ")}
            </li>
          )}
        </ul>
      </div>
    )
}