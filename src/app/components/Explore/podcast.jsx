import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

function Podcast() {
    return (
        <div className="w-80 h-[420px] bg-white  relative">
           
            <div className="relative">
                <Image 
                    src='/podcast.svg' 
                    width={324} 
                    height={130} 
                    alt="Podcast Cover" 
                    className='rounded-t-lg' 
                />
            </div>
            
            
            <div className="absolute top-16 left-5 z-10 flex items-center">
                <Image 
                    src='/BeingPodcast.svg' 
                    width={86} 
                    height={86} 
                    alt="Being Podcast Icon" 
                />
                <h1 className="mt-5 ml-3 font-bold text-2xl text-gray-900">Being Podcast</h1>
            </div>

            <div className="mt-20 ml-5 text-gray-400 font-light">
                <p>A Foundation for Easy to Develop & Deploy web Apps.</p>
            </div>

            
            <div className="mt-20 flex items-center gap-2 ml-5">
                <MdKeyboardArrowRight size={20} className="text-[#1A73E8]" />
                <h2 className="font-bold text-gray-700">Creative art and media</h2>
            </div>

           
            <hr className="mt-6 h-0.5 text-gray-300" />

            
            <div className="ml-5 mt-4">
                <div className="flex items-center">
                    <span className="font-bold text-[22px] text-gray-600">117</span> 
                    <span className="ml-2 text-[22px] text-gray-400 font-light">Financial</span>
                </div>
                <div className="flex items-center mt-2">
                    <span className="font-bold text-[22px] text-gray-600">$11,990</span>
                    <span className="ml-2 text-[22px] text-gray-400 font-light">Money raised</span>
                </div>
            </div>
            
        </div>
    );
}

export default Podcast;
