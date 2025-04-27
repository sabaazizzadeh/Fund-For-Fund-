'use client'

import { useState, useEffect } from "react";
import BrandDetailInput from "./BrandDetailInput";
import SaveButton from "./SaveButton";
import EditButton from "./EditButton"; // اضافه کردن کامپوننت EditButton
import ContinueButton from "./ContinueButton"; // اضافه کردن دکمه Continue
import Social from "./Social"; // اضافه کردن کامپوننت Social

function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false); 
    const [isSaved, setIsSaved] = useState(true); 
    const [selectedOption, setSelectedOption] = useState(''); 
    const [isContinueEnabled, setIsContinueEnabled] = useState(false);

    const handleSave = () => {
        console.log('Saved value:', inputValue);
        setIsSaved(true); 
        setIsEditing(false); 
    };

    const handleEdit = () => {
        setIsEditing(true);
        setIsSaved(false);
    };

    const handleContinueCheck = () => {
        if (inputValue.trim() !== '' && selectedOption !== '') {
            setIsContinueEnabled(true); 
        } else {
            setIsContinueEnabled(false); 
        }
    };

    const handleInputChange = (value) => {
        setInputValue(value);
        handleContinueCheck(); 
    };

    const handleSelectChange = (value) => {
        setSelectedOption(value);
        handleContinueCheck(); 
    };

    useEffect(() => {
        handleContinueCheck(); 
    }, [inputValue, selectedOption]);

    return (
        <div>
      
            <BrandDetailInput 
                setInputValue={handleInputChange} 
                isEditing={isEditing}  
                inputValue={inputValue} 
            />

            <Social onSelect={handleSelectChange} selectedOption={selectedOption} />

            
            <div>
                {isSaved ? (
                    <EditButton onEdit={handleEdit} />
                ) : (
                    <SaveButton inputValue={inputValue} onSave={handleSave} />
                )}
            </div>

         
            <ContinueButton isEnabled={isContinueEnabled} />
        </div>
    );
}

export default ParentComponent;
