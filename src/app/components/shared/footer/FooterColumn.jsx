// components/footer/FooterColumn.jsx
import Link from "next/link";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-gray-600 hover:underline">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterColumn;
