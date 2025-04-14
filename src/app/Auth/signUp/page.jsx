import ContinueWithGoogle from "@/app/components/buttons/continueWithGoogle";
import SignUpForm from "@/app/components/forms/signUpForm";
import Image from "next/image";

function SignUp() {
    return (
      <>
        <div className="mb-24">
          <h1 className="text-[#444444] text-center text-[28px] mt-8 font-medium ">Create your personal account</h1>
  
          <div className="grid justify-center items-center gap-2.5">
            <h1 className="text-center text-[#644FC1] text-5xl mt-20">Fund For Fund</h1>
            <div>
              <Image
                src="/Images/logo/logo.svg"
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
  
          {/* Wrap the reCAPTCHA text in a relative parent */}
          <div className="relative">
            {/* <p className="text-[#959595] font-light absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full">
              This site is protected by reCAPTCHA and the Google
              <span className="text-[#644FC1]"> privacy</span> and
              <span className="text-[#644FC1]"> Terms of service</span> apply
            </p> */}
          </div>
        </div>
      </>
    );
  }
  
  export default SignUp;
  