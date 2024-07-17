import { BiBuildingHouse } from "react-icons/bi";
import { BsTicketPerforated } from "react-icons/bs";
import { GiTreehouse, GiPalmTree, GiWoodCabin, GiFamilyHouse } from "react-icons/gi";
import { RiLandscapeLine } from "react-icons/ri";

const iconData = [
  { icon: BsTicketPerforated, text: "iconicos" },
  { icon: BiBuildingHouse, text: "apartamentos" },
  { icon: GiTreehouse, text: "casas del arbol" },
  { icon: GiPalmTree, text: "cabañas" },
  { icon: GiWoodCabin, text: "piscinas increibles" },
  { icon: RiLandscapeLine, text: "mini casas" },
  { icon: GiFamilyHouse, text: "" },
  { icon: BiBuildingHouse, text: "" },
  { icon: BsTicketPerforated, text: "" },
  { icon: GiTreehouse, text: "" },
  { icon: GiPalmTree, text: "" },
  { icon: GiWoodCabin, text: "" },
  { icon: RiLandscapeLine, text: "" },
  { icon: GiFamilyHouse, text: "" },
];

export function Icons() {
  return (
    <div className={`w-full h-16 flex md:justify-center bg-white md:border-t mb-8`}>
      <div className={`h-16 bg-white overflow-y-hidden border-b md:border-b-0 shadow-sm md:shadow-none md:w-full md:mt-4 flex`}>
        <div className={`flex justify-center w-full overflow-x-auto bg-scroll ml-8 md:ml-0 items-center`}>
          <div className={`flex space-x-4 ml-40 mt-2 md:space-x-6 md:ml-20 relative left-48 md:left-0 pl-20 pr-16 md:pl-0 md:pr-0 justify-center `}>
            {iconData.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center w-auto border-b-2 border-black">
                <item.icon className="text-3xl text-gray-600 hover:cursor-pointer" />
                <p className="text-sm font-semibold whitespace-nowrap">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
