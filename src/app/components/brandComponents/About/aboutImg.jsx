import Image from "next/image";

function AboutImg() {
    return (
        <>
            <div className="bg-[#E7E7E7] w-[1016px] h-[433px] flex justify-center items-center mb-10">
                <Image
                    src="/Images/grayImg.svg"
                    width={108}
                    height={108}
                    alt="About Image"
                />
            </div>
        </>
    );
}

export default AboutImg;