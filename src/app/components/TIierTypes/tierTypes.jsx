import TierTypeInput from "../inputs/tierType";

function TierTypes() {
    return ( 
        <>
            <div className="w-[728px] h-[760px] rounded-2xl shadow">
                <section>
                   <h1 className="text-[#644FC1]"> Tier type</h1>
                </section>
                <hr />
             <div>
                <TierTypeInput label="Name"/>
             </div>
            </div>
        </>
     );
}

export default TierTypes;