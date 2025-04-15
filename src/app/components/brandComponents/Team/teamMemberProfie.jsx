import Image from "next/image";

function TeamMmberProfile() {
    return ( 
        <>
            <div className="w-[76px] h-[76px] border-2 border-[#D7CFF9] rounded-2xl grid justify-center items-center  mx-auto mt-1.5">
                <Image 
                src="/Images/teamMemberProfile.svg"
                width={39}
                height={50}
                alt="Team Member Profile"
                /> 
            </div>
        </>
     );
}

export default TeamMmberProfile;