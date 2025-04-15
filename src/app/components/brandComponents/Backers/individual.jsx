function Individual({name , title}) {
    return (
        <>
            <div>
                <h1 className="text-[#444444] text-2xl mb-16 ">
                    {title}
                </h1>
                <section className="grid gap-2">
                    <input className="w-[123px] h-[121px] border-8 border-[#644FC1] rounded-3xl bg-[#E7E7E7] focus:outline-0" type="text" />
                    <span className="text-[#444444] ">{name}</span>
                </section>
            </div>
        </>
    );
}

export default Individual;