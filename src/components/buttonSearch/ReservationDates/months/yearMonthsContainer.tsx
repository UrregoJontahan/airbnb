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
    <div className='h-36 w-full overflow-hidden'>
        <div className="flex gap-4 w-full h-44 overflow-hidden overflow-x-auto p-4">
            {months.map((month, index) => (
                <div key={index} className="flex justify-center flex-col border text-center w-36 p-6 rounded-lg cursor-pointer hover:border-black focus:border-2">
                    <CiCalendar className='text-4xl w-12 h-16'/>
                    <p className='text-base font-semibold'>{month.monthName}</p>
                    <p className='text-base'>${month.year}</p>
                </div>
            ))}
        </div>
    </div>  
  );
};
