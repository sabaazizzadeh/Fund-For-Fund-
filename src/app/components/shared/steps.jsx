'use client'
import { useState } from "react";

function Steps() {
    const [currentStep , setCurrentStep] = useState(1)

    const totalSteps = 4 ;
    const goToStep = (step) =>{
        if (step >= 1 && step <= totalSteps ){
            setCurrentStep(step)
        }
    }
    return (
        <>
           <div className="max-w-lg mx-auto p-4">
      <div className="flex justify-between items-center">
        {/* مرحله 1 */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            currentStep >= 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          1
        </div>
        {/* خط بین مرحله 1 و مرحله 2 */}
        <div className={`flex-1 h-1 ${currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"}`}></div>

        {/* مرحله 2 (جدا از سایر مراحل) */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            currentStep === 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          2
        </div>
        {/* خط بین مرحله 2 و مرحله 3 */}
        <div className={`flex-1 h-1 ${currentStep >= 3 ? "bg-blue-500" : "bg-gray-300"}`}></div>

        {/* مرحله 3 */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            currentStep >= 3 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          3
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => goToStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          قبلی
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => goToStep(currentStep + 1)}
          disabled={currentStep === totalSteps}
        >
          بعدی
        </button>
      </div>
    </div>
        </>
    );
}

export default Steps;