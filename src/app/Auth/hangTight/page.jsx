import Image from "next/image";
import Link from "next/link";

function HangTight() {
    return ( 
        <>
            <div className="flex flex-col justify-center items-center mt-32">
                <Image src="/Images/tik.svg" width={267.23} height={199.29} alt="Hang tight" className="mb-14"/>
                <span className="text-[#644FC1] text-2xl mb-8">Your link is being sent. Hang tight!</span>
                <div className="flex mb-8">
                    <p className="text-[#959595] mr-1">we've sent the link to </p>
                    <p className="text-[#2D2D2D]">email user</p>
                </div>
                <Link className="text-[#644FC1] mb-20" href="/link"> Go to your mail </Link>
                <p className="text-[#959595] mb-40">You will be redirected from the link in the email, you can safetly close the tab.</p>
            </div>
        </>
     );
}

export default HangTight;