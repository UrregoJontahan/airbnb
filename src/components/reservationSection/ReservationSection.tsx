import { QuantityGuests } from "./quantityGuests/quantityGuests";
import { ReservationDates } from "./reservationDate/reservationDate";

export function ReservationSection({ room }: any) {
 
  return (
    <section className="w-full ml-auto mr-10 mt-6 hidden md:block justify-center sticky top-28">
      <div className="border rounded-lg shadow-lg m-6">
        <div className="flex gap-4 p-4 ml-4">
          <h1 className="flex text-2xl font-semibold">${room.price}
            <p className="text-lg pl-1 font-normal">noche</p>
          </h1>
        </div>
        <div className="w-10/12 h-auto border border-gray-400 rounded-lg ml-8">
          <ReservationDates/>
          <QuantityGuests room ={room}/>
        </div>
        <button className="w-10/12 h-12 bg-pink-600 rounded-lg mt-3 ml-8 font-semibold text-white text-lg">
          Reserva
        </button>
        <p className="flex justify-center text-sm mt-4">No se hará ningún cargo por el momento</p>
        <section className="flex justify-center flex-col mt-4 p-4">
          <span className="flex ml-5 text-lg mt-3">
            <p className="underline">${room.price}x5 noches</p>
            <p className="ml-auto mr-5">$269 USD</p>
          </span>
          <span className="flex ml-5 text-lg mt-3">
            <p className="underline">Tarifa de limpieza</p>
            <p className="ml-auto mr-5">$14 USD</p>
          </span>
          <span className="flex ml-5 text-lg mt-3">
            <p className="underline">Tarifa por servicio de Airbnb</p>
            <p className="ml-auto mr-5">$55 USD</p>
          </span>
        </section>
        <div className="m-3 border-t">
          <span className="text-lg font-semibold flex pt-2 m-2">
            <p className="text-lg">Total sin Incluir impuestos</p>
            <p className="ml-auto">$355 USD</p>
          </span>
        </div>
      </div>
    </section>
  );
}
