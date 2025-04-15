import ContributedProjectNumber from "./contributedProjectNumber";
import CreatedBrandNumber from "./createdBrandNumber";

function TeamMemberFooter() {
    return ( 
        <>
            <div className="bg-[#E7E7E7] h-[107px] grid justify-center items-center">
                <CreatedBrandNumber number="2"/>
                <hr className="border-[#C7C6C6] w-[221px]"/>
                <ContributedProjectNumber number="0"/> 
            </div>
        
        </>
     );
}

export default TeamMemberFooter;