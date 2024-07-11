import React, { useState } from 'react';

export function OffsetDaysCalendar() {
    const [offsetDays, setOffSetDays] = useState();

    const handleClick = (e:any) => {
       setOffSetDays(e.target.value)
    };

    return (
        <div className="md:h-0 h-12 overflow-hidden md:overflow-hidden border-t md:border-0 relative bottom-2 md:bottom-0 bg-white md:p-8 mb-2">
            <div className='md:flex md:gap-4 md:ml-16 md:relative md:bottom-10 flex left-16 overflow-x-auto gap-4 ml-6 pb-2 m-2'>
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
