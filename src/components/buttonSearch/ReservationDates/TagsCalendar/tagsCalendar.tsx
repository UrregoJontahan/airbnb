import React, { useState } from 'react';

type TagsState = {
    [key: string]: boolean;
    selectedTagDate: boolean;
    tagOne: boolean;
    tagTwo: boolean;
    tagThree: boolean;
    tagFive: boolean;
    tagSeven: boolean;
};

export function TagsCalendar() {
    const [tags, setTags] = useState<TagsState>({
        selectedTagDate: true,
        tagOne: false,
        tagTwo: false,
        tagThree: false,
        tagFive: false,
        tagSeven: false,
    });

    const calendarTags = {
        SELECTED_TAG_DATE: 'selectedTagDate',
        TAG_ONE: 'tagOne',
        TAG_TWO: 'tagTwo',
        TAG_THREE: 'tagThree',
        TAG_FIVE: 'tagFive',
        TAG_SEVEN: 'tagSeven',
    };

    const handleClick = (tag: keyof TagsState) => {
        setTags((prevTags) => ({
            ...prevTags,
            [tag]: !prevTags[tag],
        }));
    };

    return (
        <div className="md:h-0 h-12 overflow-hidden md:overflow-visible border-t md:border-0 relative bottom-3 bg-white">
            <div className='md:flex md:gap-4 md:ml-16 md:relative md:bottom-10 flex overflow-x-auto gap-4 ml-6 pb-2 pt-2'>
                <button 
                    className={`${tags.selectedTagDate ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.SELECTED_TAG_DATE)}
                >
                    Fechas exactas
                </button>
                <button 
                    className={`${tags.tagOne ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.TAG_ONE)}
                >
                    +1 día
                </button>
                <button 
                    className={`${tags.tagTwo ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.TAG_TWO)}
                >
                    +2 días
                </button>
                <button 
                    className={`${tags.tagThree ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.TAG_THREE)}
                >
                    +3 días
                </button>
                <button 
                    className={`${tags.tagFive ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.TAG_FIVE)}
                >
                    +5 días
                </button>
                <button 
                    className={`${tags.tagSeven ? "border-2 border-black focus:border-black text-sm" : "border-2 border-gray-300 text-sm"} p-2 rounded-full whitespace-nowrap`} 
                    onClick={() => handleClick(calendarTags.TAG_SEVEN)}
                >
                    +7 días
                </button>
            </div>
        </div>
    );
}
