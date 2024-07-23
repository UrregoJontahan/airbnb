import { useStateGuestsForm } from "app/app/lib/reservationForm/stateGuestsForm";

export function FormQuantityGuests({ room }: any) {
    const {
        openFormGuests,
        adults,
        children,
        babys,
        pets,
        setOpenFormGuests,
        setAdults,
        setChildren,
        setBabys,
        setPets,
    } = useStateGuestsForm();

    const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        setter(value + 1);
    };

    const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        if (value > 0) {
            setter(value - 1);
        }
    };

    const onClosed = () => {
        setOpenFormGuests(false);
    };

    return (
        <div className="flex flex-col p-4 md:p-0 bg-white">
            <div className="flex md:gap-4 gap-2 md:pt-5 md:pb-5 pb-2 border-b">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">Adultos</h2>
                    <p className="text-gray-400 md:text-base text-sm">Edad: de 13 años o más</p>
                </div>
                <div className="flex items-center ml-auto">
                    <button
                        className={`hover:border-black text-gray-800 font-bold py-1 px-3 border rounded-full ${adults === 1 && 'cursor-not-allowed'}`}
                        onClick={() => handleDecrement(setAdults, adults)}
                        disabled={adults === 1}
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
            <div className="flex gap-4 md:pt-5 pt-2 md:pb-5 pb-2 border-b">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">Niños</h2>
                    <p className="text-gray-400 md:text-base text-sm">Edades 2-12</p>
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
            <div className="flex gap-4 md:pt-5 pt-2 md:pb-5 pb-2 border-b">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">Bebés</h2>
                    <p className="text-gray-400 md:text-base text-sm">Menos de 2 años</p>
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
            <div className="flex flex-col md:flex-nowrap gap-4 md:pt-5 pt-2 md:pb-5">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">Mascotas</h2>
                    <div className="flex items-center mr-auto md:ml-auto md:mr-0">
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
                    <a href="#" className="underline text-gray-500 font-semibold text-base w-44">¿Traes un animal de servicio?</a>
                </div>
            </div>
            {openFormGuests && (
                <div className="flex flex-col">
                    <p> Este alojamiento tiene una capacidad máxima de {room.capacity} huéspedes, sin contar bebés. No se permiten mascotas.</p>
                    <button
                        className="underline ml-auto text-lg font-semibold hover:bg-gray-200 rounded-md pl-4 pr-4 pb-2 pt-2"
                        onClick={onClosed}
                    >
                        cerrar
                    </button>
                </div>
            )}
        </div>
    );
}