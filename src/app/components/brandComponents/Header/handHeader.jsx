import Image from "next/image";
import AboutEdit from "../../buttons/aboutEdit";

function HandHeader() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Image 
                    src="/Images/HandHeader.svg" 
                    width={1360} 
                    height={420} 
                    alt="Hand Graphic Header" 
                    className="w-full h-auto" 
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-4">

                <div>
                    {/* اینجا رو حواسم باید باشه برای ویرایش این برای about هست */}
                    <AboutEdit />
                </div>
                <div>
                    <button className="bg-[#644FC1] text-white px-4 py-2 rounded">
                        Setting
                    </button>
                </div>
            </div>
        </>
    );
}

export default HandHeader;
