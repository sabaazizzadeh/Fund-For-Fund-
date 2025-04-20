import Image from "next/image";

function Approve() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#644FC1] text-2xl mb-10 font-medium">Waiting to approve</h1>
                    <Image src="/Images/approve.svg" width={410.14} height={309.27} alt="Waiting to approve" className="mb-14" />
                    <span className="text-[#505050] mb-1">You will be notifed as soon as it is approved</span>
                    <p className="text-[#717171] font-extralight text-center">You information is under review and will be confirmed within 2 to 5 <br /> business</p>
                </div>
            </div>
        </>
    );
}

export default Approve;