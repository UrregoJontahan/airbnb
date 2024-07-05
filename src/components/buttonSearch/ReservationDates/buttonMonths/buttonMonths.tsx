import React, { useState } from 'react';

export const VolumeButton = () => {
  const [volume, setVolume] = useState<number>(0);
  const [months, setMoths] = useState<number>(3);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value + 1);
};

const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) {
        setter(value - 1);
    }
};

  return (
  <div>
    <div className='hidden md:block'>
      <div className='absolute top-24 flex'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold m-8">¿Cuándo es tu viaje?</h2>
          <div className="relative flex items-center justify-center w-48 h-48">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-tr from-gray-300 via-gray-100 to-pink-600 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold">{volume}</p>
                  <p className="text-lg">meses</p>
                </div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="12"
              value={volume}
              onChange={handleVolumeChange}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <p className="mt-4">Inicia el 1 de julio · <a href="#" className="text-pink-600">Edita</a></p>
        </div>
      </div>
    </div>
    <div className='md:hidden pt-6'>
      <div className='flex pl-4 pr-4 pt-4 pb-4'>
        <p className='text-lg font-semibold'>Mes(es)</p>
        <div className="flex items-center ml-auto">
          <button className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${months === 1 && "cursor-not-allowed"}`}
           onClick={()=>handleDecrement(setMoths, months)}
           disabled={months === 1}
          >
            -
          </button>
          <span className="text-black border-gray-300 text-center w-12">{months}</span>
          <button className="border hover:border-black text-gray-800 font-bold py-1 px-3 rounded-full"
           onClick={()=>handleIncrement(setMoths, months)}
           disabled={months === 12}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <p>Fecha de inicio</p>
        <button>
          <p></p>
        </button>
      </div>
    </div>
  </div>
  );
};
