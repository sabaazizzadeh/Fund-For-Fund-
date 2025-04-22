function QuestionAnswerBox({ label , number }) {
    return (
        
            <div className="flex flex-col items-start">
                <label className="mb-2 text-[#323334] font-light">
                    {label}
                </label>
                <input

                    type="text"
                    className="w-[569px] h-[34px] border border-[#8D75F7] rounded focus:outline-0 px-2"
                />
                <div>
                    <span>{number}</span>
                </div>
            </div>
     
    );
}

export default QuestionAnswerBox;