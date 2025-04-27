'use client'

function SaveButton({ inputValue, onSave }) {
    const handleClick = () => {
        if (inputValue.trim() !== '') {
            onSave(); // زمانی که دکمه Save کلیک می‌شود، ذخیره انجام می‌شود
        } else {
            console.log("Please enter a value before saving.");
        }
    };

    return (
        <button onClick={handleClick}>Save</button>
    );
}

export default SaveButton;
