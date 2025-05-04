'use client';

import React, { useState, useCallback } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import CountryDropdown from './CountryDropdown';
import { motion, AnimatePresence } from "framer-motion";


function ExploreHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { id: 1, country: 'Afghanistan' },
        { id: 2, country: 'Albania' },
        { id: 3, country: 'Argentina' },
        { id: 4, country: 'Armenia' },
        { id: 5, country: 'Australia' },
        { id: 6, country: 'Azerbaijan' }
    ];

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div>
            {/* Top Header with Search */}
            <div className="bg-[#483B8C] rounded-t-3xl h-40 flex justify-center items-center px-4 mt-5 shadow-md">
                <form className="flex items-center w-full max-w-md">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Search branch name..."
                            required
                            className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-3"
                        />
                    </div>
                    <button
                        type="submit"
                        className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

            {/* Dropdown Section */}
            <div className="bg-white rounded-b-3xl h-60 flex flex-col items-center pt-6 shadow mb-5">
                <button
                    onClick={toggleDropdown}
                    aria-expanded={isOpen}
                    aria-controls="countryList"
                    className="transition duration-200 animate-pulse w-48 h-12 font-light border border-[#644FC1] flex justify-center items-center gap-2 text-[#644FC1] rounded"
                >
                    {selectedCountry?.country || 'Select a Country'}
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isOpen && (
                    <motion.div
                        id="countryList"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mt-2 w-36 max-h-60 overflow-y-auto border border-gray-300 rounded shadow-md z-10"
                    >
                        <CountryDropdown countries={countries} onSelectCountry={handleSelectCountry} />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default ExploreHeader;
