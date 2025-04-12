import ContinueWithGoogle from "@/app/components/buttons/continueWithGoogle";
import SignUpForm from "@/app/components/forms/signUpForm";
import Image from "next/image";

function SignUp() {
    return (
        <>
            <div className="grid justify-center items-center gap-2.5">
                <h1 className="text-center text-[#644FC1] text-5xl mt-20">Fund For Fund</h1>
                <div>
                    <Image src="/Images/logo/logo.svg"
                    className="mx-auto mt-5"
                        width={50}
                        height={50}
                        alt=""
                    />
                </div>
                <div className="mt-5">
                    <ContinueWithGoogle />
                </div>
                <div className="flex justify-center items-center my-5">
                    <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
                    <div className="mx-2"><span className="text-[#959595]">or</span></div>
                    <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
                </div>
                <div className="mt-3"><SignUpForm /></div>
            </div>

            <p className="text-[#959595] font-light absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            This site is protected by reCAPTCHA and the Google  
            <span className="text-[#644FC1]"> privacy</span> and
            <span className="text-[#644FC1]"> Terms of service</span> apply
            </p>
        </>
    );
}

export default SignUp;