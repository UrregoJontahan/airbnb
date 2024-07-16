import { QuantityGuests } from "./quantityGuests/quantityGuests";
import { ReservationCosts } from "./reservationCosts/reservationCosts";
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
        <ReservationCosts room={room}/>
      </div>
    </section>
  );
}
