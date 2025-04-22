import Image from "next/image";

function DeleteQ() {
    return ( 
       <div className="flex justify-center items-center h-screen bg-[#95959599]">
             <div className="w-[422px] h-[380px] rounded-2xl bg-white flex flex-col justify-center items-center gap-10 shadow-2xl">
            <div>
                <Image src="/Images/tikk.svg" width={75} height={75} alt="delete this question" />
            </div>
            <span className="text-center text-[#505050]">This Question will be deleted, <br /> are you sure?</span>
            <div className="flex justify-center items-center gap-5">
                
                <button className="bg-[#644FC1] w-[79px] h-[34px] rounded text-white border cursor-pointer ml-5 font-light">Delete</button>
                <button className="bg-[#EDE9FE] w-[79px] h-[34px] rounded text-[#644FC1] border border-[#AA99EC] cursor-pointer font-light">Cancel</button>
            </div>
        </div>
       </div>
     );
}

export default DeleteQ;