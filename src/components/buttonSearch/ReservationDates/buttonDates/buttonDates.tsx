import { useStore } from 'app/app/lib/stateChangeButtonSearch';

export const ButtonDates: React.FC = () => {
  const {
    setShowExitButton,
    showExitButton,
    openMonths,
    openDates,
    openFlex,
    setOpenDates,
    setOpenFlex,
    setOpenMonths,
  } = useStore();
 
  const handleClickDates = () => {
    setOpenDates(true);
    setOpenMonths(false);
    setOpenFlex(false);
    setShowExitButton(!showExitButton);
  };

  const handleClickMonths = () => {
    setOpenMonths(true);
    setOpenDates(false);
    setOpenFlex(false);
    setShowExitButton(false);
  };

  const handleClickFlex = () => {
    setOpenFlex(true);
    setOpenDates(false);
    setOpenMonths(false);
    setShowExitButton(false);
  };

  return (
    <div className="w-full flex justify-center md:mt-8 h-auto">
      <div className="h-10 flex justify-around border items-center rounded-full bg-gray-200">
        <button 
          className={`rounded-full pt-1 pb-1 pl-6 pr-6 font-semibold flex ml-1 mr-1 ${!openDates && "hover:bg-gray-300"} ${openDates && "bg-white"}`} 
          onClick={handleClickDates}
        >
          Fechas
        </button>
        <button 
          className={`rounded-full pt-1 pb-1 pl-6 pr-6 font-semibold flex ${!openMonths && "hover:bg-gray-300"} ${openMonths && "bg-white"}`} 
          onClick={handleClickMonths}
        >
          Meses
        </button>
        <button 
          className={`rounded-full pt-1 pb-1 pl-6 pr-6 font-semibold flex mr-1 ${!openFlex && "hover:bg-gray-300"} ${openFlex && "bg-white"}`} 
          onClick={handleClickFlex}
        >
          Flexible
        </button>
      </div>
    </div>
  );
};
