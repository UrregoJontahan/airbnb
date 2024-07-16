import { useStore } from "app/app/lib/stateChangeButtonSearch";

export function ReservationDates (){
    const { arrivalDate, departureDate } = useStore();

 
    const currentDate = new Date();
    const endOfMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const departureDay =  new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 7);
  
    const formatDateArrival = (date: Date) => {
      const day = String(date.getDate());
      const month = String(date.getMonth() + 1);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    const formatDateDeparture = (date: Date) => {
      const day = String(date.getDate());
      const month = String(date.getMonth()+ 1)
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
  
    const formattedArrivalDate = arrivalDate instanceof Date 
      ? formatDateArrival(arrivalDate)
      : formatDateArrival(endOfMonthDate);
  
      const formattedDepartureDate = departureDate instanceof Date 
      ? formatDateDeparture(departureDate)
      : formatDateDeparture(departureDay
      );

    return(
        <section className="grid grid-cols-2">
        <div className="border-r border-gray-400 p-2 text-sm font-semibold">
          <p>Llegada</p>
          <button className="text-base font-normal">
            {formattedArrivalDate}
            {arrivalDate && (
              <span className=""></span>
            )}
          </button>
        </div>
        <div className="p-2 text-sm font-semibold">
          <p>Salida</p>
          <button className="text-base font-normal">
          {formattedDepartureDate}
            {departureDate && (
              <span className=""></span>
            )}
          </button>
        </div>
      </section>
    )
}