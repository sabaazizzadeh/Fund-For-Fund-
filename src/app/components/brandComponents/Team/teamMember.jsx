import MemberRole from "./memberRole";
import TeamMemberDescription from "./teamMemberDescription";
import TeamMemberFooter from "./teamMemberFooter";
import TeamMmberProfile from "./teamMemberProfie";

function TeamMember({ fullName }) {
  return (
    <div className="w-[259px] bg-white rounded border border-[#C7C6C6] flex flex-col overflow-hidden ">
      <TeamMmberProfile />

      <h3 className="text-[#444444] text-2xl text-center mt-2">
        {fullName || "Saba Azizzadeh"}
      </h3>

      <MemberRole />

      <TeamMemberDescription text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptas. Optio, delectus laborum. Molestiae, consequatur. Ut ea numquam vero! Corrupti perspiciatis accusamus delectus incidunt esse totam tenetur cupiditate, ut ducimus." />

      <div className="mt-6">
        <TeamMemberFooter />
      </div>
    </div>
  );
}

export default TeamMember;
