function BrandTags({ label, name, options = [], ...props }) {
    return (
        <>
            <div className="flex flex-col gap-1 w-[799px]">
                {label && (
                    <label
                        htmlFor={name}
                        className="text-[#444444] mb-0.5"
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    <select
                        className="appearance-none w-full h-[39px] border border-[#8D75F7] rounded px-3 pr-10 bg-white text-gray-700
            focus:outline-0
            "
                        name={name}
                        id={name}
                        {...props}
                    >
                        <option value=""></option>
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                className="w-[390px] border border-[#E7E7E7] text-[#717171] font-light"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    {/* فلش سمت راست */}
                    <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8D75F7]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default BrandTags;