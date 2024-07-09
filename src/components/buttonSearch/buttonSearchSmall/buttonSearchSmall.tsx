import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useStore } from "app/app/lib/stateChangeButtonSearch";

export function ButtonSearchSmall (){
    const {scrolledY} = useStore()
    return (
        <motion.div
            initial={{ y:0 }}
            animate={{ y: scrolledY ? -10 : 0 }}
        >
            <div className="flex justify-center w-auto h-12 mt-8">
                <div className={`w-auto h-12 rounded-full border border-gray-200 flex items-center shadow-lg shadow-gray-100
                hover:shadow-md`}>
                    <button className=" font-semibold pl-4 border-r pr-2">En cualquier lugar del mundo</button>
                    <button  className=" font-semibold pl-4 border-r pr-2">Cualquier semana</button>
                    <div className=" flex items-center gap-2 ml-auto pl-4 ">
                        <button className="text-gray-400">¿Cuantos? </button>
                        <button className="h-8 w-8 bg-custom-pink rounded-full text-white flex justify-center items-center mr-2">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}