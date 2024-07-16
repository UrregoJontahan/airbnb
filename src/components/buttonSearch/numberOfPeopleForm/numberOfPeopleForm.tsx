import { useState } from "react";
import { FormQuantityGuests } from "./formQuantityGuests/formQunatityGuests";

export function NumberOfPeopleForm() {
    return (
        <div className="md:w-auto md:h-auto bg-white md:absolute md:z-20 md:top-36 md:mt-2 md:rounded-3xl md:border md:p-4
            md:border-gray-300 md:shadow-lg md:shadow-gray-400 md:flex md:justify-center">
            <FormQuantityGuests/>
        </div>
    );
}
