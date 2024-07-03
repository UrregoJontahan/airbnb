import { useState } from "react"

export function TagsCalendar() {
    const [tags, setTags] = useState({
        selectedTagDate: true,
        tagOne: false,
        tagTwo: false,
        tagThree: false,
        tagFive: false,
        tagSeven: false,
    })

    const handleClick = (tag:any) => {
        setTags({
            selectedTagDate: false,
            tagOne: false,
            tagTwo: false,
            tagThree: false,
            tagFive: false,
            tagSeven: false,
            [tag]: true
        })
    }

    return (
        <div className="h-12 overflow-hidden md:overflow-visible border-t md:border-0 relative bottom-3 bg-white">
            <div className='md:flex md:gap-4 md:ml-16 md:relative md:bottom-10 flex overflow-x-auto gap-4 ml-6 pb-2 pt-2'>
                <button 
                    className={`${tags.selectedTagDate ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm" } p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick('selectedTagDate')}
                >
                    Fechas exactas
                </button>
                <button 
                    className={`${tags.tagOne ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick('tagOne')}
                >
                    +1 día
                </button>
                <button 
                    className={`${tags.tagTwo ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm" } p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick('tagTwo')}
                >
                    +2 días
                </button>
                <button 
                    className={`${tags.tagThree ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm" } p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick('tagThree')}
                >
                    +3 días
                </button>
                <button 
                    className={`${tags.tagFive ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm" } p-2 rounded-full whitespace-nowrap` } 
                    onClick={() => handleClick('tagFive')}
                >
                    +5 días
                </button>
                <button 
                    className={`${tags.tagSeven ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm" } p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick('tagSeven')}
                >
                    +7 días
                </button>
            </div>
        </div>
    )
}
