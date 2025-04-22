import { GoPlus } from "react-icons/go";
import TierTypeInput from "../inputs/tierType";
import DeleteTierType from "../buttons/deleteTierType";
import SaveTierType from "../buttons/saveTierType";

function TierTypes() {
   return (
      <>
         <div className="flex justify-center items-center h-screen">
            <div className="w-[728px] h-[760px] rounded-2xl shadow relative">
               <div className="h-[50px] flex flex-col justify-center items-center">
                   
                  <span className="text-[#644FC1] text-[22px]"> Tier type</span>
               </div>
               <hr className="border border-[#E7E7E7]" />
               <div>
                  <TierTypeInput label="Name" id="Name" placeHolder="Silver Sponsor" />
               </div>
               <div>
                  <TierTypeInput label="Reward discribtion" id="Reward-discribtion" placeHolder="Join the guest list and ... " />
               </div>
               <div>
                  <TierTypeInput label="Amount" id="Amount" placeHolder="20 USD" />
               </div>
               <div className="absolute left-0 bottom-0 mb-32 ml-20">
                  <h1 className="text-[#323334] ml-1.5 mb-1.5">Add cover photo</h1>
                  <button className="w-[192px] h-[120px] bg-[#EDE9FE] flex justify-center items-center rounded-2xl cursor-pointer "><GoPlus size={40} color="white" /></button>
               </div>
               <div className="absolute left-0 bottom-0 ml-20 mb-20 ">
                  <DeleteTierType />
                  <SaveTierType />
               </div>
            </div>
         </div>
      </>
   );
}

export default TierTypes;