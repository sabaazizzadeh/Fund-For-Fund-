import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

function SignUpWithGoogle() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[600px] h-[752px] bg-white shadow rounded-2xl grid justify-center" >
                    <div className="flex ">
                        <FaGoogle size={22} color="gray" className="mr-1.5 mt-1.5"/>
                        <span className="text-[#2D2D2D] mt-1.5">Sign up with Google</span>
                    </div>
                    <div>
                        <Image
                            src="/Images/logo/logo.svg"
                            width={109.765625}
                            height={100}
                            alt="Fund For Fund"
                            className="mx-auto"
                        />
                        <h1 className="text-[#644FC1]">Choose an account</h1>
                        <h3 className="text-[#505050]">to continue with Google</h3>

                        <div>
                            <div className="text-[#717171]">
                                <h3>Saba Azizzadeh</h3>
                                <span>saba@gmail.com</span>
                            </div>
                            <div>
                                <p className="text-[#717171]">use another account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpWithGoogle;