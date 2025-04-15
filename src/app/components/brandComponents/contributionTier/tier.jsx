import TierButton from "../../buttons/tierButton";
import TierHead from "./tierHead";
import TierImg from "./tierImg";

function Tier() {
    return (
        <>
            <div className=" ">
                <div className="w-[309px] h-[499px]  shadow bg-white ">
                    <div>
                        <TierHead title="Donation" />
                    </div>
                    <p className="text-[#444444] mx-5 text-center">Make a custom one-time or recurring contribution.</p>
                    <div>
                        <TierImg />
                    </div>
                    <div>
                        <p className="text-[#959595] mx-5 text-center">
                            You can make a donation at any amount that feels right to you. Every contribution helps and is greatly appreciated!
                        </p>
                    </div>
                    <div className="grid justify-center items-center mt-8 font-light cursor-pointer">
                        <TierButton name="This tier can not be edited" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tier;