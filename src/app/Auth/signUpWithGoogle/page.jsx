import Recaptcha from "@/app/components/recaptcha";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
function SignUpWithGoogle() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex justify-center ">
                    <div className="w-[599px] h-[751px] bg-white rounded-4xl border border-[#E7E7E7] shadow">
                        <section className="mt-7">
                            <section className="flex items-center ml-5 mb-6">
                                <FaGoogle color="gray" size={20} className="mx-1.5" />
                                <p className="text-[#2D2D2D] ml-1.5">Sign in with Google</p>
                            </section>
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        </section>



                        <div className="grid justify-center items-center mt-24">
                            <Image
                                src="/Images/logo/logo.svg"
                                width={50}
                                height={50}
                                alt="Sign in With Google"
                                className="mx-auto"
                            />
                            <div className="mt-10">
                                <p className="text-center text-[#644FC1] text-[22px] mb-6 font-medium">Choose an account</p>
                                <p className="text-center text-[#505050] text-[20px]">to continue with Google</p>
                            </div>
                        </div>
                        <div className="mt-20">



                            <section className="grid justify-center items-center">
                                <div className="border-b border-b-[#E7E7E7] w-[381px] flex items-center">
                                    <div className="mb-3.5">
                                        <Image
                                            src="/Images/profile.svg"
                                            width={30}
                                            height={30}
                                            alt="profile"
                                            className="ml-2.5"
                                        />
                                    </div>
                                    <div className="text-[#717171] ml-2.5 mb-3.5">
                                        <h3 className="text-[15px]">Saba Azizzadeh</h3>
                                        <p className="text-[12px]">saba@gmail.com</p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-center items-center">
                                <div className="border-b border-b-[#E7E7E7] w-[381px] flex items-center">
                                    <div className="my-3.5">
                                        <Image
                                            src="/Images/profile Vector.svg"
                                            width={30}
                                            height={30}
                                            alt="profile"
                                            className="ml-2.5"
                                        />
                                    </div>
                                    <div className="text-[#717171] ml-2.5 my-3.5">
                                        <h3 className="text-[15px]">Use another account</h3>

                                    </div>
                                </div>
                            </section>

                        </div>
                         <div className="mt-28">
                         <Recaptcha /> 
                         </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default SignUpWithGoogle;