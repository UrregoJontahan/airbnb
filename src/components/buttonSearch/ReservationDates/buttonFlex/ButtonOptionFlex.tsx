import { Roboto } from 'next/font/google';
import { YearMonthContainers } from '../months/yearMonthsContainer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export function ButtonOptionFlexReservation (){
    return (
        <div className="flex absolute top-28 flex-col justify-center w-11/12">
            <h2 className={`${roboto.className} text-xl font-bolder flex justify-center`}>¿Cuánto tiempo quieres quedarte?</h2>
            <div className='flex gap-4 justify-center mt-6'>
                <button className='border border-gray-300 pt-2 pb-2 pl-4 pr-4 rounded-full focus:border-black focus:border-2 cursor-pointer'>Fin de semana</button>
                <button className='border border-gray-300 pt-2 pb-2 pl-4 pr-4 rounded-full focus:border-black focus:border-2 cursor-pointer'>Semana</button>
                <button className='border border-gray-300 pt-2 pb-2 pl-4 pr-4 rounded-full focus:border-black focus:border-2 cursor-pointer'>Mes</button>
            </div>
            <div className='flex justify-center mt-16 flex-col'>
                <h2 className={`${roboto.className} text-xl font-bolder flex justify-center`}>¿Cuándo quieres ir?</h2>
                <div className='w-full h-40'>
                 <YearMonthContainers/>
                </div>
            </div>
        </div>
    )
}