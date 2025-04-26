'use client'
import { useEffect, useState } from "react";

function DetailedInput() {
    const [inputValue, setInputValue] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const handleInput = () => {
        if(inputValue.trim()){
            console.log(inputValue);
            localStorage.setItem('saved', inputValue); 
        }
        setIsEditable(false);
    };

    useEffect(() => {
        const saved = localStorage.getItem('saved');
        if (saved) {
            setInputValue(saved);
        }
    }, []);

    const handleEdit = () => {
        setIsEditable(true);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            
            <div className="mb-4">
                <input 
                    readOnly={!isEditable} 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    type="text" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${isEditable ? 'border-blue-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-200 transition-all duration-200`}
                />
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={handleInput} 
                    
                >
                    Save
                </button>
                <button 
                    onClick={handleEdit} 
                    
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default DetailedInput;
