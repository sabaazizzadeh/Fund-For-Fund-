'use client'

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Social from "../detailed/social";
function AddSocial() {
    const [isVisible, setIsVisinble] = useState(false)


    const toggleSocial = () => {
        setIsVisinble(!isVisible)
    }

    return (
        <>
            <button onClick={toggleSocial} className="bg-[#F5F5F5]  w-[139px] h-10 text-[#717171] flex justify-center items-center rounded border border-[#C7C6C6] text-center cursor-pointer font-light text-[14px]">
                <GoPlus className="mr-2" />
                Add social link
            </button>
            <div>
                {
                     isVisible && <div><Social /></div>   
                }
            </div>
        </>
    );
}

export default AddSocial;

