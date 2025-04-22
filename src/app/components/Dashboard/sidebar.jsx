import Link from "next/link";

function SideBar() {
    return ( 
        <aside className="fixed left-0 top-0 z-40 mt-16 ml-11 w-[326px] h-screen transition-transform transform sm:translate-x-0">
            <h1 className="text-[#644FC1] ml-5 text-[20px] mb-3 cursor-pointer">Fund For Fund</h1>
            <nav className="flex flex-col gap-5 ml-5 font-light text-[#444444]">
                <Link href="/Public-profile" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Public profile</Link>
                <Link href="/Info" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Info</Link>
                <Link href="/Contribution-tiers" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Contribution tiers</Link>
                <Link href="/About" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">About</Link>
                <Link href="/Team" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Team</Link>
                <Link href="/Updates" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Updates</Link>
                <Link href="/Expenses" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Expenses</Link>
                <Link href="/Pay-out" className="w-[269px] h-[38px] flex items-center rounded transition-colors duration-300 hover:bg-[#8D75F733]">Pay out</Link>
            </nav>
        </aside>
    );
}

export default SideBar;
