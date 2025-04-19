'use client'
import * as yup from "yup"
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";



const schema = yup.object({
    contact: yup
        .string().required("Mobile number or email address is required")
        .test("is-email-or-phone", "Enter a valid phone number or email address.", (value) => {
            if (!value) return false;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^09\d{9}$/;

            return emailRegex.test(value) || phoneRegex.test(value);
        }),
})

function TroubleLogin() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema), mode:"onchange" })

    const onsubmitt = (data) => {
        console.log(data);

    }

    const [imgSrc , setImagSrc] = useState("/Images/key.svg") 
    const handleClick = () => {
        setImagSrc("/Images/lockk.svg")
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">

                <div className="my-12">
                    <Image src={imgSrc} width={75} height={78.75} alt="image" />
                </div>

                <span className="text-[#644FC1] text-2xl mb-4">
                    Trouble with loggin in?
                </span>
                <p className="text-[#444444] mb-14 ">Enter your email address or phone number and we'll <br /> send you a link to get back into your account.</p>

                <div>
                    <form onSubmit={handleSubmit(onsubmitt)} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm text-[#444444]">
                                Mobile number or email address
                            </label>
                            <input
                                type="text"
                                className="pl-4 py-2 border border-[#8D75F7] w-full placeholder:text-[#C7C6C6] placeholder:font-light focus:outline-0"
                                placeholder="name@example.com"
                                required
                                {...register("contact")}
                            />
                            {errors.contact && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.contact.message}
                                </p>
                            )}
                        </div>



                        <button onClick={handleClick} type="submit"
                            disabled={!isValid}
                            className={`rounded text-white w-[384px] h-10 font-light mb-12 
                        
                        ${isValid ? "bg-[#644FC1] cursor-pointer" : "bg-[#D7CFF9] cursor-not-allowed"
                                }
                        
                        `}>Continue</button>




                        <div className="flex justify-center items-center my-5">
                            <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
                            <div className="mx-2"><span className="text-[#959595]">or</span></div>
                            <div className="w-[174px] h-0.5 bg-[#E7E7E7]"></div>
                        </div>


                        <div className="grid justify-center items-center mt-5 mb-24">
                            <div className="mx-auto">
                                <Link href="/forgot-password" className="text-[#644FC1] font-extralight hover:underline">
                                    Create an account
                                </Link>


                            </div>
                            <div className="mx-auto">
                                <Link href="/forgot-password" className="text-black  text-[13px] font-extralight hover:underline">
                                    back to login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TroubleLogin;