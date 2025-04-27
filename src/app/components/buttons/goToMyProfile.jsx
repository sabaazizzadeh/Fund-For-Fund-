import Link from "next/link";

function GoToMyProfile() {
    return (
       <Link href='/BrandOrOrganization'><button className="w-[167px] h-[39px] bg-[#644FC1] rounded text-white cursor-pointer">Go to my profile</button></Link> 
    );
}

export default GoToMyProfile;