'use client'
import About from "../components/brandComponents/About/about";
import Backers from "../components/brandComponents/Backers/Backers";
import ContributionTier from "../components/brandComponents/contributionTier/contributionTier";
import FAQ from "../components/brandComponents/FAQ/faq";
import HandHeader from "../components/brandComponents/Header/handHeader";
import Team from "../components/brandComponents/Team/team";
import Updates from "../components/brandComponents/Updates/updates";
import Navbar from "../components/shared/navbar";
import { Link, Element } from 'react-scroll';

function BrandOrOrganization() {
    return (
        <>
            <Navbar showSearchAndSignIn={true} />
            <div className="grid gap-28">
                 
                
                <div className="flex flex-col justify-center items-center">
                    
                <HandHeader />
                    <nav className="bg-white w-[1360px] h-20 shadow flex items-center gap-10 justify-center rounded-2xl">
                        <Link className="cursor-pointer" to="contribution-tier" smooth={true} duration={500}>CONTRIBUTION TIER</Link>
                        <Link className="cursor-pointer" to="about" smooth={true} duration={500}>ABOUT</Link>
                        <Link className="cursor-pointer" to="team" smooth={true} duration={500}>TEAM</Link>
                        <Link className="cursor-pointer" to="top-backers-contributors" smooth={true} duration={500}>TOP BACKERS & CONTRIBUTORS</Link>
                        <Link className="cursor-pointer" to="faq" smooth={true} duration={500}>FAQ</Link>
                        <Link className="cursor-pointer" to="updates" smooth={true} duration={500}>UPDATES</Link>
                    </nav>
                </div>

                <Element name="contribution-tier">
                    <ContributionTier />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="team">
                    <Team />
                </Element>
                <Element name="top-backers-contributors">
                    <Backers />
                </Element>
                <Element name="faq">
                    <FAQ />
                </Element>
                <Element name="updates">
                    <Updates />
                </Element>
            </div>

        </>
    );
}

export default BrandOrOrganization;