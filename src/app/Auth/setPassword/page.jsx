import Continue from "@/app/components/buttons/continue";
import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

export default function SetPassword() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <Image
                        src="/Images/lock.svg"
                        width={100}
                        height={100}
                        alt="Set password"
                        className="mx-auto mb-5"
                    />
                    <h1 className="text-center text-[#644FC1] text-[26px] font-medium mb-14">Set your Password</h1>

                    <form className="w-[384px]">
                        <div className="grid ">
                            <label className="my-1.5 text-[#2D2D2D] text-[14px]" htmlFor="">Password</label>
                            <div className="relative w-full">
                                <input className="w-full border border-[#8D75F7] rounded h-10 pl-3 pr-10 focus:outline-0" type="text" name="" id="" />
                                <BsEyeFill className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>
                            <div className="text-[#959595] text-[10px] my-0.5">
                                <span className="block">At least 6 characters long but 12 or more is better</span>
                                <span className="block">A combination of uppercase letters, lowercase letters, numbers and symbols.</span>
                            </div>
                        </div>

                        <div className="grid">
                            <label className="my-1.5 text-[#2D2D2D] text-[14px]" htmlFor="">Re enter password</label>
                            <div className="relative w-full">
                                <input className="w-full border border-[#8D75F7] rounded h-10 pl-3 pr-10 focus:outline-0" type="text" name="" id="" />
                                <BsEyeSlashFill className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <button className="bg-[#D7CFF9] rounded text-white w-[384px] h-10 mt-5 opacity-70 cursor-not-allowed">Continue</button>
                    </form>
                </div>
            </div>
        </>
    );
}
