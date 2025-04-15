import Image from "next/image";
import Tier from "./tier";
import AddTier from "./addTier";

function ContributionTier() {
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
                    <h1 className="text-[#444444] text-2xl ml-5">Contribution Tier</h1>
                </section>
                <section className="flex ">
                    <Image
                        src="/Images/line.svg"
                        width={2}
                        height={5}
                    />
                    <h2 className="text-[#444444] text-[17px] ml-2">Recurring or One time</h2>
                </section>
            </div>
            <section className="flex justify-center items-center gap-10">
                <Tier />
                <Tier />
                <AddTier />
            </section>
        </>
    );
}

export default ContributionTier;