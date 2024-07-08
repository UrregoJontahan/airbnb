import React, { useState } from 'react';

export function OffsetDaysCalendar() {
    const [offsetDays, setOffSetDays] = useState();

    const handleClick = (e:any) => {
       setOffSetDays(e.target.value)
    };

    return (
        <div className="md:h-0 h-12 overflow-hidden md:overflow-visible border-t md:border-0 relative bottom-3 bg-white">
            <div className='md:flex md:gap-4 md:ml-16 md:relative md:bottom-10 flex overflow-x-auto gap-4 ml-6 pb-2 pt-2'>
                <button 
                    className={` border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={ handleClick}
                >
                    Fechas exactas
                </button>
                <button 
                    className={`border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={handleClick}
                    value={1}
                >
                    +1 día
                </button>
                <button 
                    className={`border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={handleClick}
                    value={2}
                >
                    +2 días
                </button>
                <button 
                    className={`border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={handleClick}
                    value={3}
                >
                    +3 días
                </button>
                <button 
                    className={`border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={handleClick}
                    value={5}
                >
                    +5 días
                </button>
                <button 
                    className={`border-2 border-gray-300 focus:border-black text-sm p-2 rounded-full whitespace-nowrap`} 
                    onClick={ handleClick}
                    value={7}
                >
                    +7 días
                </button>
            </div>
        </div>
    );
}
