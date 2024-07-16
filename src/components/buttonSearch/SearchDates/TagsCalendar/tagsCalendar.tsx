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
        <div className='md:flex md:gap-4 md:ml-16 md:relative md:bottom-6'>
            <button 
                className={`text-sm ${tags.selectedTagDate && "border-black border-2"} border-gray-300 p-2 rounded-full`} 
                onClick={() => handleClick('selectedTagDate')}
            >
                Fechas exactas
            </button>
            <button 
                className={`text-sm ${tags.tagOne && "border-black border-2"} border-gray-300 p-2 rounded-full`} 
                onClick={() => handleClick('tagOne')}
            >
                +1 día
            </button>
            <button 
                className={`text-sm ${tags.tagTwo && "border-black border-2"} border-gray-300 p-2 rounded-full`} 
                onClick={() => handleClick('tagTwo')}
            >
                +2 días
            </button>
            <button 
                className={`text-sm ${tags.tagThree && "border-black border-2"} border-gray-300 p-2 rounded-full`} 
                onClick={() => handleClick('tagThree')}
            >
                +3 días
            </button>
            <button 
                className={`text-sm border-gray-300 p-2 rounded-full ${tags.tagFive && "border-black"}` } 
                onClick={() => handleClick('tagFive')}
            >
                +5 días
            </button>
            <button 
                className={`text-sm ${tags.tagSeven && "border-black border-2"} border-gray-300 p-2 rounded-full`} 
                onClick={() => handleClick('tagSeven')}
            >
                +7 días
            </button>
        </div>
    )
}
