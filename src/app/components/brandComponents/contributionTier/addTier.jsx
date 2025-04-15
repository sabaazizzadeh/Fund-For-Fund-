import TierButton from "../../buttons/tierButton";
import TierHead from "./tierHead";
import TierImg from "./tierImg";

function AddTier() {
    return (
        <div className=" ">
            <div className="w-[309px] h-[499px]  shadow bg-white ">
                <div>
                    <TierHead />
                </div>
                <div className="grid justify-center items-center">
                    <h1 className="text-[#C7C6C6] text-3xl text-center mb-10 mt-20">Add Tier</h1>
                    <button className="w-[90px] h-[90px] rounded-3xl bg-[#644FC1] text-white text-6xl font-extralight text-center mx-auto cursor-pointer">+</button>
                </div>
            </div>

        </div>
    );
}

export default AddTier;