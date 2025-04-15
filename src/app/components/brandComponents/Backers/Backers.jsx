import Image from "next/image";
import Individual from "./individual";

function Backers() {
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
                    <h1 className="text-[#444444] text-2xl ml-5">TOP BACKERS & CONTRIBUTIONS </h1>

                </section>

            </div>
            <div className="flex justify-center items-center gap-96">
                <Individual name="Saba Azizzadeh" title="Individual"/>
                <Individual name="Kelaasor" title="Brand or Organization"/>
            </div>
        </>
    );
}

export default Backers;