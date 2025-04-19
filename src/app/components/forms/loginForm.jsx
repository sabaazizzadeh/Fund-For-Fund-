'use client';

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
   
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm text-[#444444]">
            Mobile number or email address 
          </label>
          <input
            type="email"
            id="email"
            className="pl-4 py-2 border border-[#8D75F7] w-full placeholder:text-[#C7C6C6] placeholder:font-light focus:outline-0"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="mb-5 relative">
          <label htmlFor="password" className="block mb-2 text-sm text-[#444444]">
           password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="pl-4 py-2 pr-10 border border-[#8D75F7] w-full placeholder:text-[#C7C6C6] placeholder:font-light focus:outline-0"
            placeholder="Enter your password"
            required
          />
          <div
            className="absolute top-[40px] right-3 cursor-pointer text-[#8D75F7]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="text-sm mb-5">
          <Link href="/forgot-password" className="text-[#644FC1] font-light hover:underline">
            Forgot your password?
          </Link>
        </div>

        <button type="submit" className="bg-[#644FC1] rounded text-white w-[384px] h-10 font-light cursor-pointer">Continue</button>
        <div className="grid justify-center items-center mt-5">
          <div className="mx-auto">
            <Link href="/forgot-password" className="text-black text-[13px] font-light hover:underline">
              Don't have one?
            </Link>

          </div>
          <div>
            <Link href="/forgot-password" className="text-[#644FC1] font-light hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </form>
  
  );
}

export default LoginForm;
