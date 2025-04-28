import Link from "next/link";

export default function MenuItem({ href, label, onClick, className }) {
  if (href) {
    return (
      <Link
        href={href}
        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md ${className || ""}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md ${className || ""}`}
    >
      {label}
    </button>
  );
}
