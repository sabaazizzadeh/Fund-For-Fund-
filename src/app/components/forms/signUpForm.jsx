'use client'

import Continue from "../buttons/continue";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
function SignUpForm() {


    const schema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        emailAddress: yup.string().email("Invalid email").required("Email is required"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })
    

    async function submitForm(user){
        try {
            const response = await axios.post("" , user)
            localStorage.setItem("token", response.data.jwt);
        } catch (error) {
            console.log(error);
            
        }
    }






    
    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center ">

                    <div className="w-[400px]">
                        <div className="">

                            <form onSubmit={handleSubmit(submitForm)} className="space-y-3 " action="#">
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">First name</label>
                                    <input {...register("firstName")} type="text" name="firstName" id="firstName" className=" w-[384px] border border-[#8D75F7] text-gray-900 text-sm rounded focus:outline-0  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    {errors?.firstName? (
                                        <span>{errors.firstName.message}</span>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Last name</label>
                                    <input {...register("lastName")} type="text" name="lastName" id="lastName" placeholder="" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors?.lastName?  (
                                        <span>{errors.lastName.message}</span>
                                    ) : null }
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Email address</label>
                                    <input {...register("emailAddress")} type="email"  id="email" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    {errors?.emailAddress? (
                                        <span>{errors.emailAddress.message}</span>
                                    ) : null}
                                </div>
                                <p className="text-[#644FC1] text-[12px] font-light">
                                    We will send you 6 digit code to your email.
                                </p>
                                <Continue />
                       
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUpForm;