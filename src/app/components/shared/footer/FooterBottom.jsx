// components/footer/FooterBottom.jsx
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
      <div className="flex gap-4 mb-2 md:mb-0">
        <a href="/trust" className="hover:underline">Trust & safety</a>
        <a href="/terms" className="hover:underline">Terms of use</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="flex gap-4 items-center">
        <select className="text-xs bg-transparent outline-none">
          <option>English (100%)</option>
        </select>
        <div className="flex gap-3 text-lg">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
