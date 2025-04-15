'use client';

import { useState } from 'react';
import { MdEdit } from "react-icons/md";

function FaqBox() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flex items-start gap-4 w-fit mx-auto">
      {/* FAQ Box */}
      <div className="w-[934px] bg-white border border-[#8D75F7]">
        <div className="flex items-center justify-between">
          <h2 className="font-light text-[#505050] ml-3.5 mt-3">
            What is React?
          </h2>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-[#959595] transform transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform mt-3.5 duration-300 ${
                showAnswer ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* پاسخ */}
        <div
          className={`mt-4 text-[#555555] font-light transition-all duration-500 ease-in-out overflow-hidden ${
            showAnswer ? 'max-h-[200px]' : 'max-h-0'
          }`}
        >
          <p className="mx-5">
            React is a JavaScript library for building user interfaces. It allows
            developers to build reusable UI components and manage state in a
            declarative way.
          </p>
        </div>
      </div>

      {/* Edit Icon */}
      <div className="w-[61px] h-[56px] border border-[#8D75F7] flex justify-center items-center cursor-pointer">
        <MdEdit size={24} className="text-[#8D75F7]" />
      </div>
    </div>
  );
}

export default FaqBox;
