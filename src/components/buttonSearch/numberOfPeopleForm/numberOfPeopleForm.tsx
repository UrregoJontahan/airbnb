import { useState } from "react";

export function NumberOfPeopleForm() {
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [babys, setBabys] = useState<number>(0);
    const [pets, setPets] = useState<number>(0);

    const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        setter(value + 1);
    };

    const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        if (value > 0) {
            setter(value - 1);
        }
    };

    return (
        <div className="w-1/5 h-2/5 bg-white absolute z-20 top-36 mt-2 rounded-3xl border border-gray-300 shadow-lg shadow-gray-400 flex justify-center">
            <div className="flex flex-col mt-4">
                <div className="flex gap-4 pt-5 pb-5 border-b">
                    <div className="flex flex-col">
                        <h2 className="font-semibold">Adultos</h2>
                        <p className="text-gray-400">Edad: de 13 años o más</p>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${adults === 0 && 'cursor-not-allowed'}`}
                            onClick={() => handleDecrement(setAdults, adults)}
                            disabled={adults === 0}
                        >
                            -
                        </button>
                        <span className="text-black border-gray-300 text-center w-12">{adults}</span>
                        <button
                            className="border hover:border-black text-gray-800 font-bold py-1 px-3 rounded-full"
                            onClick={() => handleIncrement(setAdults, adults)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 pt-5 pb-5 border-b">
                    <div className="flex flex-col">
                        <h2 className="font-semibold">Niños</h2>
                        <p className="text-gray-400">Edades 2-12</p>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${children === 0 && 'cursor-not-allowed'}`}
                            onClick={() => handleDecrement(setChildren, children)}
                            disabled={children === 0}
                        >
                            -
                        </button>
                        <span className="text-black border-gray-300 text-center w-12">{children}</span>
                        <button
                            className="border hover:border-black text-gray-800 font-bold py-1 px-3 rounded-full"
                            onClick={() => handleIncrement(setChildren, children)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 pt-5 pb-5 border-b">
                    <div className="flex flex-col">
                        <h2 className="font-semibold">Bebés</h2>
                        <p className="text-gray-400">Menos de 2 años</p>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${babys === 0 && 'cursor-not-allowed'}`}
                            onClick={() => handleDecrement(setBabys, babys)}
                            disabled={babys === 0}
                        >
                            -
                        </button>
                        <span className="text-black border-gray-300 text-center w-12">{babys}</span>
                        <button
                            className="border hover:border-black text-gray-800 font-bold py-1 px-3 rounded-full"
                            onClick={() => handleIncrement(setBabys, babys)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 pt-5 pb-5">
                    <div className="flex flex-col">
                        <h2 className="font-semibold">Mascotas</h2>
                        <a href="#" className="underline text-gray-500 font-semibold">¿Traes un animal de servicio?</a>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${pets === 0 && 'cursor-not-allowed'}`}
                            onClick={() => handleDecrement(setPets, pets)}
                            disabled={pets === 0}
                        >
                            -
                        </button>
                        <span className="text-black border-gray-300 text-center w-12">{pets}</span>
                        <button
                            className="border hover:border-black text-gray-800 font-bold py-1 px-3 rounded-full"
                            onClick={() => handleIncrement(setPets, pets)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
