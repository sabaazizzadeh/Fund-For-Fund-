'use client'
import Link from "next/link";
import SearchBar from "../search/searchBar";
import SignInButton from "../buttons/signInButton";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
function Navbar() {
    const { user, login, logout } = useAuth()
    if (user === undefined) {
        return <div>Loading ...</div>
    }
    const links = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "Explore",
            href: "/explore",
        },
        {
            text: "About us",
            href: "/aboutUs",
        },
        {
            text: "Help & Support",
            href: "/help",
        },
    ]


    return (
        <>
            <div className="bg-white h-20 flex justify-around items-center shadow">

                <div className="">
                    <Image src="/Images/logo/logo.svg"
                        width={27.84}
                        height={48}
                        alt="Fund For Fund"
                    />
                </div>
                <nav className="ml-20">
                    <ul className="flex gap-8 font-light">
                        {
                            links.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href}>{link.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex">
                    <SearchBar />
                    <div>
                        {
                            user ? <Image src="Images/profileLogin.svg" width={42} height={42} alt="profile"
                                className="ml-3"
                            /> : <SignInButton />
                        }

                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;