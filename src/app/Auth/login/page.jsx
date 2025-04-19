import ContinueWithGoogle from "@/app/components/buttons/continueWithGoogle";
import LoginForm from "@/app/components/forms/loginForm";
import Image from "next/image";

function Login() {
    return (
        <>
            <h1 className="text-center text-[#644FC1] text-5xl mt-20">Fund For Fund</h1>
            <div>
                <div className="text-center my-2 text-[#444444]">
                    <span >Create an account or sign in to start <br /> creating</span>
                </div>
                <Image
                    src="/Images/logo/logo.svg"
                    className="mx-auto mt-5"
                    width={50}
                    height={50}
                    alt=""
                />
            </div>

            <div className="grid justify-center items-center my-5">
                <ContinueWithGoogle />
            </div>

            <div className="flex justify-center items-center my-5">
                <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
                <div className="mx-2"><span className="text-[#959595]">or</span></div>
                <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
            </div>
            <div className="mt-3"><LoginForm /></div>

        </>
    );
}

export default Login;