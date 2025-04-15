import Image from "next/image";

function Discord() {
    return ( 
        <button className="w-[109px] h-[34px] rounded border border-[#AA99EC] text-[#644FC1] bg-[#EDE9FE] font-medium cursor-pointer flex justify-center items-center ">
            <Image 
            src="/Images/discord.svg"
            width={19}
            height={15}
            alt="discord "
            className="mr-2"
            />
            View All</button>

     );
    
}

export default Discord;