import { useStore } from "app/app/lib/stateChangeButtonSearch"

export function LocationSearchInput (){

    const { address, setShowSuggestions, setAddress } = useStore()

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAddress(value);

        if(address){
          setShowSuggestions(true);
        }
      };

    return(
        <div>
            <input className={`md:text-base md:mt-1  md:hover:bg-gray-300 md:text-gray-400 md:font-normal md:ml-0 md:pl-0 md:overflow-hidden md:whitespace-nowrap md:overflow-ellipsis md:truncate md:border-none md:focus:outline-none md:h-4 md:w-auto
              border rounded-lg w-11/12 ml-4 h-14 border-gray-400 pl-4 font-semibold
            `}
              type="text"
              placeholder={`Explora destinos`}
              onChange={handleAddressChange}
              value={address}                  
              onFocus={() => setShowSuggestions(true)}
            />
        </div>
    )
}