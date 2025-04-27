import Image from "next/image";

import AddQuestion from "../../buttons/addQuestion";

function FAQ() {
    return (
        <>
            <div  className="grid justify-self-start pl-[449px] mb-11">
                <section className="flex mb-6">
                    <Image
                        src="/Images/rec.svg"
                        width={12}
                        height={12}
                        alt="rec"
                    />
                    <h1 className="text-[#444444] text-2xl ml-5">FAQ</h1>

                </section>

            </div>
            
            <div className="flex justify-center items-center mt-16">
                <AddQuestion />
            </div>
        </>
    );
}

export default FAQ;