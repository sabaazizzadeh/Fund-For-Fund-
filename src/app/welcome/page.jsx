import Image from "next/image";
import StartProject from "../components/buttons/startProject";
import GoHomePage from "../components/buttons/goHomepage";

function Welcome() {
    return ( 
        <>
            <div  className="h-screen flex justify-center items-center text-center">
                <div>
                    <h1 className="text-[#644FC1] text-5xl font-bold">Welcome to 3F</h1>
                    <Image 
                        src="/images/welcome.svg"
                        width={300}
                        height={240}
                        alt="welcome"
                        className="mx-auto my-12"
                    />
                    <span className="text-[#717171] text-3xl mt-5">Your journey begins here.
                        <br /> 
                        Ready to start?
                    </span>
                    <div className="mt-10 flex justify-center gap-5">
                        <GoHomePage />
                        <StartProject />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
