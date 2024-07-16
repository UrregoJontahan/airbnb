import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'app/app/styles/calendarStyles.css';
import { TagsCalendar } from 'app/components/buttonSearch/SearchDates/TagsCalendar/tagsCalendar';
import { useStore } from 'app/app/lib/stateChangeButtonSearch';

export const CalendarReservation = () => {
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

  const handleDateChange = (date:any) => {
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
    <div className="md:flex md:absolute md:top-20 md:flex-col">
      <div className='md:flex md:flex-nowrap flex flex-col'>
        <div className='md:flex md:h-96 justify-center mt-4'>
          <Calendar
            onChange={handleDateChange}
            value={[arrival, departure]}
            minDate={new Date()}
            activeStartDate={viewDate}
            onActiveStartDateChange={handleActiveStartDateChange}
            showDoubleView={false}
            className={`calendar-arrival`}
            tileClassName={tileClassName}
          />
        </div>
        <div className='md:flex md:h-96 justify-center'>
          <Calendar
            onChange={handleDateChange}
            value={[arrival, departure]}
            minDate={new Date()}
            activeStartDate={viewDateNext}
            onActiveStartDateChange={handleActiveStartDateChange}
            showDoubleView={false}
            className={`calendar-departure`}
            tileClassName={tileClassName}
          />
        </div>
      </div>
      <TagsCalendar />
    </div>
  );
};
