"use client"
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'app/app/styles/calendarReservation/calendarReservation.css';


export function CalendarReservation (){
    const {
        arrivalDate,
        departureDate,
        setArrivalDate,
        setOpenarrive,
        setOpenExit,
        setDepartureDate,
        setShowExitButton,
        openArrive,
        openExit,
      } = useStore();
    
      const [arrival, setArrival] = useState(arrivalDate || null);
      const [departure, setDeparture] = useState(departureDate || null);
      const [viewDate, setViewDate] = useState(new Date());
      const [viewDateNext, setViewDateNext] = useState(() => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return nextMonth;
      });
    
      useEffect(() => {
        if (arrivalDate) {
          setArrival(arrivalDate);
        }
        if (departureDate) {
          setDeparture(departureDate);
        }
      }, [arrivalDate, departureDate]);
    
      const handleDateChange = (date: any) => {
        if (openArrive) {
          setArrival(date);
          setArrivalDate(date);
          setOpenarrive(false);
          setOpenExit(true);
          setShowExitButton(true);
        } else if (openExit) {
          setDeparture(date);
          setDepartureDate(date);
        }
      };
    
      const handleActiveStartDateChange = ({ activeStartDate }:any) => {
        setViewDate(activeStartDate);
        const nextMonth = new Date(activeStartDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setViewDateNext(nextMonth);
      };
    
      const tileClassName = ({ date, view }:any) => {
        if (view === 'month') {
          if (arrival && date.getTime() === new Date(arrival).getTime()) {
            return 'selected-date';
          }
          if (departure && date.getTime() === new Date(departure).getTime()) {
            return 'selected-date';
          }
        }
        return null;
      };
       
      return (
        <div className="flex">
          <div className='flex flex-nowrap justify-center'>
            <div className='h-auto flex'>
              <div className='flex w-80'>
                <Calendar
                  onChange={handleDateChange}
                  value={[arrival, departure]}
                  minDate={new Date()}
                  activeStartDate={viewDate}
                  onActiveStartDateChange={handleActiveStartDateChange}
                  showDoubleView={false}
                  className={`calendar-arrival-reservation`}
                  tileClassName={tileClassName}
                />
              </div>
              <div className='flex w-80'>
                <Calendar
                  onChange={handleDateChange}
                  value={[arrival, departure]}
                  minDate={new Date()}
                  activeStartDate={viewDateNext}
                  onActiveStartDateChange={handleActiveStartDateChange}
                  showDoubleView={false}
                  className={`calendar-departure-reservation no-weeks`}
                  tileClassName={tileClassName}
                />
              </div>
            </div>
          </div>
        </div>
      );
}