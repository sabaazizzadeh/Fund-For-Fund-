import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    className="border-[0.5px] border-[#E7E7E7]  w-80 h-10 pl-11 focus:outline-1 rounded-lg shadow-lg border-"
                    placeholder="Search brand, category, tag or..."
                />
                <CiSearch className="absolute left-3 top-2.5  -translate-y-0.5 text-gray-500 mr-3" size={22}/>
            </div>

        </>
    );
}

export default SearchBar;