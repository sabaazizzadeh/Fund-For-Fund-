import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function SelectSocial() {
    const socialMediaOptions = {
        Facebook : <FaFacebook />,
        Twitter : <FaTwitter /> ,
        Instagram : <FaInstagram /> ,
        LinkedIn : <FaLinkedin /> ,
        TikTok : <FaTiktok /> ,
        Website : <FaEarthAmericas /> ,
        Whatsapp : <FaWhatsapp />,
        Telegram : <FaTelegram /> ,
        Discord : <FaDiscord />

    }
    return ( 
        <>
           
        </>
     );
}

export default SelectSocial;