'use client'

import Continue from "../buttons/continue";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";

function SignUpForm() {
    const [errorMessage, setErrorMessage] = useState(""); 
    const [loading, setLoading] = useState(false);

    const schema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        emailAddress: yup.string().email("Invalid email").required("Email is required"),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });

    async function submitForm(user) {
        console.log("User Data:", user);

        setLoading(true); 
        setErrorMessage(""); 

        try {
  
            console.log("Data would be sent to API:", user);

        
        } catch (error) {
            setErrorMessage("An error occurred. Please try again."); 
            console.log(error);
        } finally {
            setLoading(false); 
        }
    }

    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[400px]">
                        <div className="">
                            <form onSubmit={handleSubmit(submitForm)} className="space-y-3" action="#">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">First name</label>
                                    <input {...register("firstName")} type="text" name="firstName" id="firstName" className="w-[384px] border border-[#8D75F7] text-gray-900 text-sm rounded focus:outline-0 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors?.firstName && (
                                        <span className="text-red-500 text-xs">{errors.firstName.message}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Last name</label>
                                    <input {...register("lastName")} type="text" name="lastName" id="lastName" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors?.lastName && (
                                        <span className="text-red-500 text-xs">{errors.lastName.message}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="emailAddress" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Email address</label>
                                    <input {...register("emailAddress")} type="email" name="emailAddress" id="email" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors?.emailAddress && (
                                        <span className="text-red-500 text-xs">{errors.emailAddress.message}</span>
                                    )}
                                </div>

                                <p className="text-[#644FC1] text-[12px] font-light">
                                    We will send you a 6-digit code to your email.
                                </p>

                                {errorMessage && <div className="text-red-500 text-xs">{errorMessage}</div>}

                                <Continue disabled={!isValid || loading} /> 
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUpForm;
