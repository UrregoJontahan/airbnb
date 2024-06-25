import Image from "next/image";
import mapworld from "../../../../public/imagesMaps/mapWorld.jpg";
import mapEua from "../../../../public/imagesMaps/eua.webp";
import mapSpain from "../../../../public/imagesMaps/spain.webp";
import mapUuee from "../../../../public/imagesMaps/eeuu.webp";
import mapMex from "../../../../public/imagesMaps/Mexico.webp";
import mapCaribe from "../../../../public/imagesMaps/c61d10f5-4ab3-4d16-bed7-0449e15c8277.jpg";

export function MapsByZones() {
  return (
    <div className="w-auto md:overflow-hidden">
        <h2 className="md:flex md:text-base md:font-semibold md:pl-12 md:mt-5 hidden ">Búsqueda por region</h2>
        <div className="h-36 overflow-hidden mt-4 md:mt-0 md:h-auto md:overflow-hidden">
            <div className="md:flex md:flex-wrap md:pl-2 md:justify-center md:mt-2 overflow-x-scroll overflow-y-hidden md:overflow-hidden flex">
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                        <Image src={mapworld} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="md:truncate md:flex md:text-base text-gray-500">Búsqueda flex...</p>
                </div>
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                    <Image src={mapEua} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="text-base flex text-gray-500">Europa</p>
                </div>
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                        <Image src={mapSpain} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="text-base flex text-gray-500">España</p>
                </div>
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                        <Image src={mapUuee} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="text-base flex text-gray-500">Estados Unidos</p>
                </div>
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                        <Image src={mapMex} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="text-base flex text-gray-500">México</p>
                </div>
                <div className="md:hover:bg-gray-200 md:w-32 md:h-40 md:flex md:flex-col md:items-center md:justify-center md:m-1 md:rounded-2xl ml-4 w-32 h-40">
                    <div className="w-28 h-28 relative">
                        <Image src={mapCaribe} alt="maps" layout="fill" objectFit="cover" className="rounded-xl border border-gray-400"/>
                    </div>
                    <p className="text-base flex text-gray-500">Caribeña</p>
                </div>
            </div>
        </div>
    </div>
  );
}
