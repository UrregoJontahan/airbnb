import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export function OptionClearOrSearch() {
  const { 
        openReservation, 
        suggestionsAddress, 
        openPanelSearch,
        setOpenPanelSearch
    } = useStore();

    const handleClickButtonSearch = () => {
        setOpenPanelSearch(false)
    } 

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: openPanelSearch ? 1 : 0,
        y: openPanelSearch ? 0 : 50,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute bottom-0 w-full p-4 border-t border-gray-300 ${
        openReservation && "hidden"
      } ${suggestionsAddress && "hidden"}`}
    >
      <div className="flex w-full">
        <motion.button
        whileTap={{scale:0.9 , backgroundColor: "#D1D5DB"}}
        transition={{duration: 0.3}}
        className="font-semibold flex text-center items-center underline text-lg">
          Limpiar todo
        </motion.button>
        <motion.button 
          whileTap={{scale:0.9 , backgroundColor: "#A0525C"}}
          transition={{duration: 0.1}}
          className="ml-auto text-lg text-white font-semibold rounded-md w-32 bg-pink-600 pt-2 pb-2 pl-4 pr-4 flex items-center gap-4"
          onClick={handleClickButtonSearch}
        >
          <FaSearch />
          Buscar
        </motion.button>
      </div>
    </motion.div>
  );
}
