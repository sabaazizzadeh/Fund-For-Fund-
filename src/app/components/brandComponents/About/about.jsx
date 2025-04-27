import Image from "next/image";
import AboutEdit from "../../buttons/aboutEdit";
import AboutDescription from "./aboutDescription";
import AboutImg from "./aboutImg";

function About() {
    return ( 

        <>
           <div  className="grid justify-center items-center">
           <div className="flex items-center mb-16">
                <Image 
                src="Images/rec.svg"
                width={12}
                height={12}
                alt="rec"
               
                /> 

                <h1 className="text-[#444444] text-2xl ml-5 mr-8">About</h1>
                <AboutEdit />
                
            </div>
            <div>
            <AboutImg />
            <AboutDescription />
            </div>
           </div>
        </>
     );
}

export default About;