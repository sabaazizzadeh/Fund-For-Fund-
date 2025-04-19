import AddSocial from "../buttons/addSocial";

function Info() {
    return (
        <div className="w-[810px] space-y-4">
            <div className="relative">
                <input
                    className="py-3.5 pr-4 pl-4 border border-[#8D75F7] focus:outline-0 w-full h-[462px]"
                    type="text"
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button className="border border-[#C7C6C6] bg-[#F5F5F5] rounded w-[109px] h-[39px] text-[#717171] font-light">
                        Edit
                    </button>
                    <button className="bg-[#644FC1] text-white font-light rounded w-[109px] h-[39px]">
                        Save
                    </button>
                </div>
            </div>

            <div className="space-y-1  text-[#505050] leading-relaxed">
                <span className="block font-bold text-[20px] mb-3">
                    Help your contributors find you faster (at least 3 options)
                </span>
                <span className="block font-light">
                    Connect your socials so the contributors get to know you better and find you faster.
                </span>
            </div>
            <div>
                <AddSocial />
            </div>
        </div>
    );
}

export default Info;
