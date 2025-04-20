'use client'
import Link from "next/link";
import { useState } from "react";

function StartBrand() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = () => setAuthenticated(true);
  const handleUnAuth = () => setAuthenticated(false);

  return (
    <>
      {
        authenticated ? (
          <Link
            href="/basicForm"
            className="bg-[#5C4FC1] text-white font-light w-[259px] h-[39px] flex items-center justify-center rounded mx-auto mb-3 cursor-pointer"
          >
            Start
          </Link>
        ) : (
          <Link
            href="/Auth/signUp"
            className="bg-[#5C4FC1] text-white font-light w-[259px] h-[39px] flex items-center justify-center rounded mx-auto mb-3 cursor-pointer"
          >
            Start
          </Link>
        )
      }
    </>
  );
}

export default StartBrand;
