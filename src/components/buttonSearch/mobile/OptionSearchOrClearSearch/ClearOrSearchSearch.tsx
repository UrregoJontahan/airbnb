import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export function OptionClearOrSearch() {
  const { openReservation, suggestionsAddress, openPanelSearch } = useStore();

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
        <p className="font-semibold flex text-center items-center underline text-lg">
          Limpiar todo
        </p>
        <button className="ml-auto text-lg text-white font-semibold rounded-md w-32 bg-pink-600 pt-2 pb-2 pl-4 pr-4 flex items-center gap-4">
          <FaSearch />
          Buscar
        </button>
      </div>
    </motion.div>
  );
}
