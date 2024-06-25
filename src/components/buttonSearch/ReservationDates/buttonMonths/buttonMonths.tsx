import React, { useState } from 'react';

export const VolumeButton = () => {
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  return (
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
  );
};
