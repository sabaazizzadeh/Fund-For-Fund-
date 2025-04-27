function ContinueButton({ isEnabled }) {
    return (
        <button
            className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 
                ${isEnabled ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!isEnabled}
        >
            Continue
        </button>
    );
}

export default ContinueButton;
