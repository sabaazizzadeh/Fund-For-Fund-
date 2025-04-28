'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';
import UserProfile from '../shared/userProfile';
import Image from 'next/image';

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative inline-block text-left">

            {/* Avatar */}
            <UserProfile onClick={toggleMenu} />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-[347px] h-fit bg-white shadow-lg rounded-2xl font-light text-[#505050]"
                    >
                        {/* User Info Section */}
                        <div className="flex items-center my-2 ml-5">
                            {/* Profile Picture */}
                            <img
                                src="Images/profileLogin.svg"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>

                                <p className="font-medium text-lg">John Doe</p>

                                <p className="text-sm text-gray-500">johndoe@example.com</p>
                            </div>
                        </div>

                        <hr className="border border-[#E7E7E7]" />

                        <ul className="py-5 px-5">
                            <li className='my-3 flex items-center'>
                                <Image src='/Images/userProfile.svg' width={19} height={20} alt='logout' />
                                <MenuItem href="/profile" label="My Profile" className={`text-[18px]`} /></li>
                            <li className='my-3 text-[18px] flex items-center'>
                                <Image src='/Images/myBrand.svg' width={19} height={20} alt='logout' />
                                
                                <MenuItem href="/brand" label="My Brand" className={`text-[18px]`} /></li>
                            <li className='my-3 text-[18px] flex items-center'>
                                <Image src='/Images/setting.svg' width={19} height={20} alt='logout' />
                                <MenuItem href="/settings" label="Setting" className={`text-[18px]`} /></li>
                            <li className='my-3 text-[18px] flex items-center'>

                                <Image src='/Images/logout.svg' width={19} height={20} alt='logout' />
                                <MenuItem
                                    onClick={() => console.log("Logging out...")}
                                    label="Log Out"
                                    className="text-red-600 text-[18px] cursor-pointer"
                                />
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
