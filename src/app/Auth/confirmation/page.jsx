import Continue from "@/app/components/buttons/continue";
import FundForFundLogo from "@/app/components/FundForFundLogo/FundForFundLogo";

function Confirmation() {
    return (
        <>
            <div className="grid justify-center items-center  text-center gap-5">
                <h1 className="text-[#444444] text-2xl">Confirm your email</h1>
                <FundForFundLogo />
                <h1 className="text-[#644FC1] text-2xl">Enter confirmation code</h1>
                <span className="text-[#959595]">Enter the 6-digit login code we sent to <br/> yourname@yahoo.com </span>
                <div className="flex gap-1.5 justify-center my-10">
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />
                    <input className="border-b-[0.5px] border-[#505050] w-[32px] focus:outline-0 text-center" type="text" />

                </div>
                <div className="mx-auto">
                    <Continue />
                </div>
            </div>
        </>
    );
}

export default Confirmation;