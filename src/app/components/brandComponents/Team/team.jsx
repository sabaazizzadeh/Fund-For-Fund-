import Image from "next/image";
import TeamMember from "./teamMember";
import Invite from "./invite";

function Team() {
    return (
        <>
            <div className="grid justify-self-start pl-[449px] mb-11">
                <section className="flex mb-6">
                    <Image
                        src="/Images/rec.svg"
                        width={12}
                        height={12}
                        alt="rec"
                    />
                    <h1 className="text-[#444444] text-2xl ml-5">Team</h1>

                </section>
               
            </div>
            <div className="flex gap-5 justify-center text-center">
                    <TeamMember />
                    <Invite />
                </div>
        </>
    );
}

export default Team;