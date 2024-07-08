import React, { useMemo } from 'react';
import { CiCalendar } from "react-icons/ci";

interface Month {
  year: number;
  monthName: string;
}

export const YearMonthContainers: React.FC = () => {

  const currentYear = new Date().getFullYear();
  const endYear = 2025;

  const months = useMemo(() => {
    let allMonths: Month[] = [];
    for (let year = currentYear; year <= endYear; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month);
        allMonths.push({
          year,
          monthName: date.toLocaleString('default', { month: 'long' }),
        });
      }
    }
    return allMonths;
  }, [currentYear, endYear]);

  return (
    <div className='h-40 overflow-hidden'>
        <div className="flex md:gap-4 h-44 overflow-hidden overflow-x-auto p-4 gap-2">
            {months.map((month, index) => (
                <div key={index} className="flex justify-center flex-col border text-center pl-8 pr-8 rounded-lg cursor-pointer hover:border-black focus:border-2">
                    <CiCalendar className='text-4xl ml-2 md:w-12 md:h-16'/>
                    <p className='text-base font-semibold'>{month.monthName}</p>
                    <p className='text-base'>${month.year}</p>
                </div>
            ))}
        </div>
    </div>  
  );
};
