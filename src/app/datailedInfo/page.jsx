import Link from "next/link";
import Info from "../components/DetailInfo/info";

function DetailedInfo() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-[#644FC1] text-2xl mb-16">Detailed info</h1>
                    <span className="block text-[#505050] text-[23px] text-center mb-5">
                        What is the primary mission or objective of your brand/organization?
                    </span>
                    <div className="mb-20">
                        <span className="text-[#505050] font-light text-center">
                            Be more specific about it, asit will be published as your deck on the 3F(150-300 characters).
                        </span>
                        <Link className="text-[#0881EA] font-light" href="/somelink">Read more</Link>
                    </div>
                    <Info />
                </div>
            </div>
        </>
    );
}

export default DetailedInfo;