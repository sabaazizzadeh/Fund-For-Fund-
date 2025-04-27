'use client'


import { useState, useEffect } from "react";

function BrandDetailInput({ setInputValue, isEditing, inputValue }) {
    const [localInputValue, setLocalInputValue] = useState(inputValue);

   
    useEffect(() => {
        if (isEditing) {
            setLocalInputValue(inputValue);
        }
    }, [isEditing, inputValue]);

    const handleInputValue = (event) => {
        const newValue = event.target.value;
        setLocalInputValue(newValue);
        setInputValue(newValue);       
    };

    return (
        <input
            onChange={handleInputValue}
            type="text"
            value={localInputValue} 
            disabled={!isEditing} 
        />
    );
}

export default BrandDetailInput;
