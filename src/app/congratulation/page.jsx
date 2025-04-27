import Image from "next/image";
import GoToMyProfile from "../components/buttons/goToMyProfile";
import Navbar from "../components/shared/navbar";

function Congratulation() {
    return (
        <>
        <Navbar showSearchAndSignIn={true} />
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-[#644FC1] text-3xl mb-16">Congratulation!</h1>
                    <Image className="mb-36 rounded" src="Images/congratulation.svg" width={467.61} height={324.4} alt="congratulation" />
                    <span className="text-[#505050] mb-4">Your creative starter has been approved by our experts!</span>
                    <p className="text-[#959595] mb-10">Welcome aboard! Let's dive in and gt started</p>

                    <GoToMyProfile />
                </div>
            </div>
        </>
    );
}

export default Congratulation;