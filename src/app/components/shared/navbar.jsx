import Link from "next/link";
import SearchBar from "../search/searchBar";
import SignInButton from "../buttons/signInButton";
import Image from "next/image";

function Navbar() {

    const links = [
        {
            text : "Home" ,
            href : "/",
        },
        {
            text : "Explore" ,
            href : "/explore",
        },
        {
            text : "About us" ,
            href : "/aboutUs",
        },
        {
            text : "Help & Support" ,
            href : "/help",
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
                    <SignInButton />
                </div>
            </div>
        </>
     );
}

export default Navbar;