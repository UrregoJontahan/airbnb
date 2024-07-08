import { Roboto } from 'next/font/google';
import { YearMonthContainers } from '../months/yearMonthsContainer';
import { OptionsSkipAndNext } from '../../mobile/sectionSkip/optionSkipAndNext';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export function ButtonOptionFlexReservation (){
    return (
        <div className="md:flex md:absolute md:top-28 md:flex-col md:justify-center md:w-11/12 mt-4 border-t pt-4">
            <h2 className={`md:${roboto.className} md:text-xl text-lg font-semibold pl-4 md:font-bolder flex md:justify-center`}>¿Cuánto tiempo quieres quedarte?</h2>
            <div className='flex md:gap-4 justify-center md:mt-6 mt-3 gap-2'>
                <button className='border border-gray-300 md:pt-2 md:pb-2 md:pl-4 md:pr-4 pl-3 pr-3 pb-1 pt-1 rounded-full focus:border-black focus:border-2 cursor-pointer'>
                    Fin de semana
                </button>
                <button className='border border-gray-300 md:pt-2 md:pb-2 md:pl-4 md:pr-4 pl-3 pr-3 pb-1 pt-1 rounded-full focus:border-black focus:border-2 cursor-pointer'>
                    Semana
                </button>
                <button className='border border-gray-300 md:pt-2 md:pb-2 md:pl-4 md:pr-4 pl-3 pr-3 pb-1 pt-1 rounded-full focus:border-black focus:border-2 cursor-pointer'>
                    Mes
                </button>
            </div>
            <div className='md:flex md:justify-center md:mt-16 mt-4 flex-col'>
                <h2 className={`md:${roboto.className} md:text-xl text-lg md:font-bolder font-semibold md:flex md:justify-center pl-4`}>¿Cuándo quieres ir?</h2>
                <div className='w-full h-40'>
                 <YearMonthContainers/>
                </div>
            </div>
            <div className="pt-28 md:hidden">
                <OptionsSkipAndNext/>
            </div>
        </div>
    )
}