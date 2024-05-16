import Link from "next/link"
import { FaAirbnb } from "react-icons/fa";

import {Mulish} from "next/font/google"
const mulish = Mulish({
    weight: ["800"],
    subsets: ["latin"]
  })

export function RoomForm (){

    const handleSubmitForm = async (e:any) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:2000/rooms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  }),
          });
          if (response.ok) {
            console.log("Inicio de sesión exitoso");
          } else{
            alert("ERROR")
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      }
    

    return(
     <div>
        <Link href={"/"} className="flex relative top-4 font-bold text-pink-600 left-0 lg:left-14 w-48">
            <FaAirbnb className="text-4xl"/>
            <span className={`${mulish.className} text-2xl font-bold hidden md:block lg:hidden`}>airbnb</span>
            <span className={`${mulish.className} text-2xl font-bold hidden lg:block`}>airbnb</span>
        </Link>
        <div className="flex items-center justify-center">
            <form className="flex flex-col border border-gray-300 p-12 gap-2 shadow-xl shadow-neutral-400" method="POST">
                <label htmlFor="title">Título:</label>
                <input type="text" id="title" name="title" className="border border-gray-400 rounded-lg"  required />

                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" className="border border-gray-400 rounded-lg"  required></textarea>

                <label htmlFor="price">Precio:</label>
                <input type="number" id="price" name="price" className="border border-gray-400 rounded-lg" />

                <label htmlFor="location">Ubicación:</label>
                <input type="text" id="location" name="location" className="border border-gray-400 rounded-lg"  required />

                <label htmlFor="capacity">Capacidad:</label>
                <input type="number" id="capacity" name="capacity" className="border border-gray-400 rounded-lg"  required />

                <label htmlFor="amenities">Comodidades (separadas por comas):</label>
                <input type="text" id="amenities" name="amenities" className="border border-gray-400 rounded-lg"  />

                <label htmlFor="photos">Fotos (URLs separadas por comas):</label>
                <input type="text" id="photos" name="photos" className="border border-gray-400 rounded-lg"  />
                <button type="submit" className="w-full h-10 border bg-pink-600 hover:bg-pink-700 rounded-lg mt-4 text-white font-medium cursor-pointer">Enviar</button>
            </form>
        </div>
     </div>
    )
}