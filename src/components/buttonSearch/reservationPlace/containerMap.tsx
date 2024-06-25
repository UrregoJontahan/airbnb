import { MapsByZones } from "app/components/Map/mapByZones/mapsByZones"

export function ContainerMaps(){
    return(
        <div className="2xl:w-1/4 md:w-1/4 md:h-auto md:bg-white md:absolute md:z-20 md:top-32 md:mt-2 md:rounded-3xl md:border md:border-gray-300 md:shadow-xl">
                <MapsByZones/>
        </div>
    )
} 