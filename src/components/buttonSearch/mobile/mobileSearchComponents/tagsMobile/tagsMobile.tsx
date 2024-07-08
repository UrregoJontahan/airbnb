import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export function TagsMobile (){
    const { 
        setClosed, 
        setShowSuggestions, 
        showSuggestions, 
        setOpenPanelSearch,
        setSuggestionsAddress,
        openPanelSearch 
    } = useStore()

    const handleClickCloseSearch = () => {
        setClosed(true)
        setShowSuggestions(false)
        setSuggestionsAddress(false)
    }

    const handelClickClosedPanelSearch = () => {
        setOpenPanelSearch(false)
    }
    

    return(
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{
            opacity: openPanelSearch ? 1 : 0,
            y: openPanelSearch ? 0 : 50,
            }}
            transition={{ duration: 0.3 }}
            className={`flex mt-5 items-center gap-6`}>
            {showSuggestions ? 
            <button className="flex rounded-full border border-gray-400 w-8 h-8 justify-center font-bold ml-5 text-lg bg-gray-100 items-center" 
                onClick={handleClickCloseSearch}>
                <FaArrowLeft />
            </button> : 
            <button className="flex rounded-full border border-gray-400 w-8 h-8 justify-center font-bold ml-5 text-lg bg-gray-100 items-center" 
                onClick={handelClickClosedPanelSearch}>
                <IoClose />
            </button>
            }
            <span className="text-lg ml-2 font-semibold">Estadias</span>
            <span className="text-lg font-semibold">Experiencias</span>
        </motion.div>
    )
}