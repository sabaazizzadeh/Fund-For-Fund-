'use client'
import { useState } from "react";


function TeamMemberDescription({ text }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className="text-[#959595] font-light  mx-5 mt-6 flex flex-col justify-center items-center">
            <p className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-12'
                }`}>
                {text}
            </p>

            <button onClick={() => setExpanded(!expanded)}
                className="mt-2 text-[#0881EA] hover:underline font-light cursor-pointer">
                {
                    expanded ? "Show less" : "Show more"
                }
            </button>
        </div>
    );
}

export default TeamMemberDescription;