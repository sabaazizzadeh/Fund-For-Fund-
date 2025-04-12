import Continue from "../buttons/continue";

function SignUpForm() {
    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center ">
                 
                    <div className="w-[400px]">
                        <div className="">
                         
                            <form className="space-y-3 " action="#">
                                <div>
                                    <label for="text" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">First name</label>
                                    <input type="text" name="firstName" id="firstName" className=" w-[384px] border border-[#8D75F7] text-gray-900 text-sm rounded focus:outline-0  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Last name</label>
                                    <input type="password" name="password" id="password" placeholder="" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-[14px] font-medium text-[#2D2D2D] dark:text-white">Email address</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" className="w-[384px] border border-[#8D75F7] text-gray-900 text-[14px] rounded focus:outline-0  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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