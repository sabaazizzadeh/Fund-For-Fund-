import QuestionAnswerBox from "./questionAnswerBox";

function Question() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-[888px] h-[429px] rounded-2xl bg-white shadow-2xl ">
                    <div className="mt-20">
                    <div className="flex flex-col justify-center items-center">
                        <QuestionAnswerBox label="Question" />
                        <QuestionAnswerBox label="Answer" />
                    </div>
                    <div className="flex gap-6 mt-10 absolute right-0 bottom-0 mr-40 mb-36">
                        <button className="bg-[#EDE9FE] w-[75px] h-[34px] rounded text-[#644FC1] border border-[#AA99EC] cursor-pointer font-light">Cancel</button>
                        <button className="bg-[#EDE9FE] w-[133px] h-[34px] rounded text-[#644FC1] border border-[#AA99EC] cursor-pointer font-light">Delete question</button>
                        <button className="bg-[#644FC1] w-[139px] h-[34px] rounded text-white border cursor-pointer ml-5">Save</button>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;