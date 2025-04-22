'use client'
function TierTypeInput({ label, id = "tier-input" , placeHolder }) {
    return (
        <div className="grid justify-center items-center mt-10">
            <div className="flex flex-col items-start w-full">
                <label htmlFor={id} className="mb-2 text-[#323334] font-light">
                    {label}
                </label>
                <textarea
                    id={id}
                    rows="1"
                    placeholder={placeHolder}
                    className="w-[569px] min-h-[34px] border border-[#8D75F7] rounded resize-none focus:outline-0 px-2 py-1 overflow-hidden placeholder:font-light placeholder:text-[14px]"
                    onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height =`${e.target.scrollHeight}px` ;
                    }}
                />
            </div>
        </div>
    );
}

export default TierTypeInput;
