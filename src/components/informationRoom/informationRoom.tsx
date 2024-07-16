import { Details } from "../details/details"
import { Calification } from "../calification/calification"
import { UserHost } from "../shared/profileUser/userHost/userHost"
import { IconsReference } from "../IconsAdReference/iconsAndReference"
import { InfoRoom } from "../Room-Info-Basic/RoomInfo"
import { Map } from "app/components/Map/map";

export function InformationRoom ({room}:any){
    return(
        <section className="md:w-1/2 w-full">
            <Details room={room}/>
            <Calification/>
            <UserHost host={room.host} />
            <IconsReference />
            <div className="p-6 text-lg md:ml-10 w-11/12">{room.description}</div>
                <InfoRoom room={room} /> 
                <div className="pl-8 md:ml-8">
                    <h2 className='text-2xl font-semibold'>A donde iras</h2>
                    <p>{room.location}</p>
                    <Map coordinates={room.coordinates}/>
                </div>
        </section>
    )
}