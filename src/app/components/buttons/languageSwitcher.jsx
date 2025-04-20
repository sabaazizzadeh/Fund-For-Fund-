import { MdKeyboardArrowDown } from "react-icons/md";
import { PiTranslateLight } from "react-icons/pi";
function LanguageSwitcher() {
    return ( 
        <button className="w-[161px] h-[39px] rounded bg-white shadow ">
        <PiTranslateLight />
            English (100%)
        <MdKeyboardArrowDown /> 
        </button>
     );
}

export default LanguageSwitcher;