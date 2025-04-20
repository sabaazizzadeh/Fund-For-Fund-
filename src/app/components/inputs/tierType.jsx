function   TierTypeInput({label}) {
    return ( 
        <div className="flex justify-center items-center">
            <label className="mb-1  text-[#323334] font-light">{label}</label>
            <input className="w-[569px] h-[34px] border border-[#8D75F7] rounded mt-12  focus:outline-0" type="text" />
        </div>
     );
}

export default TierTypeInput;