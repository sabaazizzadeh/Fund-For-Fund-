import SmallContinue from "../components/buttons/smallContinue";
import BrandNameInput from "../components/inputs/brandNameInput";
import BrandTags from "../components/inputs/brandTags";
import SelectInput from "../components/inputs/selectInput";

function BasicInfo() {
    const countryOptions = [
        { value: "USA", label: "USA" },
        { value: "Brazil", label: "Brazil" },
        { value: "Canada", label: "Canada" },
        { value: "Spain", label: "Spain" },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div >
                <section>
                    <h1 className="text-[#644FC1] text-3xl font-bold mb-8">Basic info</h1>
                    <h2 className="text-[#505050] text-[22px] font-bold mb-5">Tell about your Brand/organization</h2>
                    <p className="text-[#505050] font-light mb-2">Provide an overview of the brand or organization you want to register on 3F</p>
                </section>

                <section className="flex gap-3.5">
                    <BrandNameInput label="Brand/Organisation name" />
                    <SelectInput label="Country" options={countryOptions} />
                </section>
                <p className="text-[#505050] font-light my-5">Select the primary category that best describes your brand or organization</p>
                <section className="flex gap-3.5">


                    <SelectInput
                        label="Category"
                        options={[
                            { value: "fashion", label: "Fashion" },
                            { value: "tech", label: "Technology" },
                            { value: "food", label: "Food & Beverage" },
                            { value: "education", label: "Education" },
                        ]}
                    />
                    <SelectInput
                        label="Subcategory"
                        options={[
                            { value: "fashion", label: "Fashion" },
                            { value: "tech", label: "Technology" },
                            { value: "food", label: "Food & Beverage" },
                            { value: "education", label: "Education" },
                        ]}
                    />
                </section>

                <section className="mt-10">
                    <BrandTags 
                    label="Brand tags"
                    options={[
                        { value: "fashion", label: "Fashion" },
                        { value: "tech", label: "Technology" },
                        { value: "food", label: "Food & Beverage" },
                        { value: "education", label: "Education" },
                    ]}/>
                </section>
                <SmallContinue />
            </div>
        </div>
    );
}

export default BasicInfo;
