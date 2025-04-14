// components/footer/Footer.jsx
import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-10 h-[295px] text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerLinks.map((section) => (
          <FooterColumn key={section.title} title={section.title} links={section.links} />
        ))}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
