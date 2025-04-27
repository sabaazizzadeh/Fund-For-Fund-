'use client'


import { useState } from "react";
import Select from "react-select";

const options = [
    {value : 'Website' , label : 'Website'},
    {value : 'YouTube' , label : 'YouTube'},
    {value : 'Instagram' , label : 'Instagram'},
    {value : 'twitter' , label : 'twitter'},
    {value : 'Discord' , label : 'Discord'},
    {value : 'WhatsApp' , label : 'WhatsApp'},
]

function Social() {
    const [selectedOption , setSelectedOption] = useState(null)
    return (
        <>
            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            /> 
        </>
    );
}

export default Social;