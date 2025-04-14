function BrandNameInput({label}) {
    return ( 
        <>
            <form className="flex flex-col gap-1 w-[392px]" action="">
                <label className="text-[#444444] mb-0.5" htmlFor="">{label}</label>
                <input className="w-[392px] h-[39px] border border-[#8D75F7] rounded px-3 pr-10 bg-white text-gray-700 focus:outline-0" type="text" />
            </form>
        </>
     );
}

export default BrandNameInput;