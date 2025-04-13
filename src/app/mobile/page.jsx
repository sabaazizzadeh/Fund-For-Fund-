import Continue from "../components/buttons/continue";
import FundForFundLogo from "../components/FundForFundLogo/FundForFundLogo";
import PhoneInput from "../components/inputs/phoneInput";

function Mobile() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div>
                <h1 className="text-[#444444] text-3xl text-center mb-8">Confirm your email</h1>
                    <FundForFundLogo />
                    <form className="grid mt-20" action="">
                        <label className="text-[#2D2D2D] text-[14px] my-1.5" htmlFor="">Mobile number</label>
                        <PhoneInput />
                        <span className="text-[#644FC1] text-[12px] my-0.5">We will send you 6 digit code to your mobile number.</span>
                        <div className="mt-5">
                            <Continue />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Mobile;