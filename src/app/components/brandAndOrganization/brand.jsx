import Image from "next/image";
import StartBrand from "../buttons/startBrand";
import LearnMoreBrand from "../buttons/learnMoreBrand";

function Brand() {
    return (
        <>

            <div className="text-center mt-24">
                <h1 className="text-[#270F94] font-bold text-2xl">Create your profile and take the first step towards new opportunities</h1>
                <p className="mx-56 font-light text-[#717171] text-[20px] mt-8">
                    By creating your account, you'll gain access to thriving community where brands and individuals 
                    are committed to offering you ongoing support. This support network will empower you with the resources, guidance, and connections 
                    you need to succeed, ensuring  that you're never alone on your journey.

                </p>
            </div>
            <div className="flex justify-center items-center mt-24 mb-36">

                <div className="
                
                w-[320px] h-[470px] border border-[#644FC1] border-0.5 rounded-2xl ">
                    <Image
                        src="/Images/bag.svg"
                        width={77}
                        height={60.11}
                        alt=""
                        className="mx-auto mt-16"
                    />
                    <section className="text-center mt-20">
                        <h1 className="text-[#644FC1] text-2xl mb-4">Brand or Organisation</h1>
                        <p className="text-[#959595] text-[15px] text-justify mx-8">
                            If your brand is established and you're looking for continuous support,
                            get started now.
                        </p>
                    </section>

                    <section className="grid justify-center items-center  mt-16 mb-9">
                        <StartBrand />
                        <LearnMoreBrand />
                    </section>
                </div>
            </div>
        </>
    );
}

export default Brand;