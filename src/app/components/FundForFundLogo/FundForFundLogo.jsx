import Image from "next/image";

function FundForFundLogo() {
    return (

        <>
            <div className="grid justify-center items-center">
                
                <h1 className="text-center text-[#644FC1] text-5xl mt-5">Fund For Fund</h1>
                <div>
                    <Image src="/Images/logo/logo.svg"
                        className="mx-auto mt-5"
                        width={50}
                        height={50}
                        alt=""
                    />
                </div>

            </div>
        </>
    );
}

export default FundForFundLogo;