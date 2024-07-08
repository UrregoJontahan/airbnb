import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'app/app/styles/calendarStyles.css';
import { OffsetDaysCalendar } from 'app/components/buttonSearch/ReservationDates/TagsCalendar/offSetDays';
import { useStore } from 'app/app/lib/stateChangeButtonSearch';
import { OptionsSkipAndNext } from 'app/components/buttonSearch/mobile/sectionSkip/optionSkipAndNext';

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
  const [additionalMonths, setAdditionalMonths] = useState(1);
  const [showMoreMonths, setShowMoreMonths] = useState<any>(false);
  const [calendar, setCalendar ] =useState<any>([])
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

  const handleClickButtonShowMore = () => {
    setAdditionalMonths((prev) => prev + 1);
    setShowMoreMonths(true);
    const nextMonth = new Date(viewDateNext);
    nextMonth.setMonth(nextMonth.getMonth() + additionalMonths);
    let updateCalendar = [...calendar,
      <div className='md:flex md:h-96 w-96 md:mb-0 relative bottom-3'>
          <Calendar
            onChange={handleDateChange}
            value={[arrival, departure]}
            minDate={new Date()}
            activeStartDate={nextMonth}
            onActiveStartDateChange={handleActiveStartDateChange}
            showDoubleView={false}
            className={`calendar-arrival`}
            tileClassName={tileClassName}
            />
      </div>
      ]
      setCalendar(updateCalendar)
  };
  
  return (
    <div className="md:flex md:absolute md:top-20 md:flex-col">
      <div className='md:flex md:flex-nowrap'>
        <div className='h-96 overflow-x-hidden overflow-y-auto md:h-auto md:flex md:mb-3 md:mt-0 pt-2 '>
          <div className='h-9 w-96 border-b fixed flex items-start overflow-hidden md:hidden'>
            <Calendar className={`week md:hidden z-50`}/>
          </div>
          <div className='md:flex md:h-96 w-96 h-68 md:justify-center mt-12 md:mt-0'>
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
          <div className='md:flex md:h-96 w-96 md:mb-0 relative bottom-3 md:bottom-0 ml-3 m:ml-0'>
            <Calendar
              onChange={handleDateChange}
              value={[arrival, departure]}
              minDate={new Date()}
              activeStartDate={viewDateNext}
              onActiveStartDateChange={handleActiveStartDateChange}
              showDoubleView={false}
              className={`calendar-departure no-weeks`}
              tileClassName={tileClassName}
            />
          </div>
          {showMoreMonths && calendar}
          <div className='md:hidden relative bottom-4'>
            <button className='border w-full border-black rounded-md font-medium text-black pb-3 pt-3' onClick={handleClickButtonShowMore}> Cargar más Fechas</button>
          </div>
        </div>
      </div>
      <OffsetDaysCalendar/>
      <OptionsSkipAndNext/>
    </div>
  );
};
