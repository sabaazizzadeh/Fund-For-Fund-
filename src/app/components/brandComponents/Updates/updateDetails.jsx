import Discord from "../../buttons/discord";
import UpdateDate from "./updateDate";

function UpdateDetails({ name, social, description }) {
    return (
        <>
            <div className="text-[#444444] flex justify-between ml-14">
                <div className="flex">
                    <h1 className="font-bold mr-1 mt-5">{name}</h1>
                    <p className="font-light mt-5 ">published a new update on </p>
                    <h1 className="font-bold ml-1  mt-5">{social}</h1>
                </div>

                <div className="mt-5 mr-10">
                    <UpdateDate date="10 July 2024" />
                </div>
            </div>
            <div className="">
                <p className="font-light mt-2.5 ml-14 ">{description}</p>
                
            </div>
            <div className="grid justify-end mr-10">
                 <Discord />
            </div>
            <div>

            </div>
        </>
    );
}

export default UpdateDetails;