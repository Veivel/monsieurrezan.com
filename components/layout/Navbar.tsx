/* eslint-disable react/jsx-key */

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import useMediaQuery from "../utils/media/media";
import { slide as Menu } from "react-burger-menu";
import Branding from "../constants/Branding";
import { Link as ScrollLink } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";
import FancyButton from "../constants/buttons/FancyButton";
import Drawer from "./Drawer";
import { useState } from "react";
import ScalingLink, { UnsizedScalingLink } from "../constants/ScalingLink";
import { landingSections } from "../constants/data/sections";

// Top-most navbar container
const NavbarContainer = styled.nav`
    ${tw`
    fixed [z-index: 99] w-full
    flex flex-row items-center self-center
    px-5 md:px-9 py-6 md:py-3 border-b-2
    border-gray-200 border-opacity-50 bg-slate-100
    shadow-md
    `}
`;

// Navbar Items
const NavItemWrapper = styled.ul`
    ${tw`w-full h-auto md:h-full flex flex-row md:flex-row-reverse lg:ml-20`}
`;

const NavbarItem = styled.li`
    ${tw`md:mr-8 flex items-center justify-center min-h-full text-black cursor-pointer font-normal  md:text-base`}
`;

// Call-to-action button
const NavbarButton = styled.button`
    white-space: nowrap;
    ${tw`bg-gray-700 hover:bg-black text-white text-base py-2 px-4 rounded-2xl font-bold`}
`;

const Navbar = () => {
    const activeSection = useGlobalStore(state => state.activeSection);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

    return(
        <div>
        <NavbarContainer>
            <Link href="/" style={{textDecorationLine: "none"}}>
                <Branding theme="white"/>
            </Link>
            <NavItemWrapper>
            { isDesktop ? 
            <>
                {/* desktop view */}
                <Link className="text-white w-auto" href="/daftar/">
                    <FancyButton style={{'marginRight': '16px'}}>
                        Daftar Sekarang!
                    </FancyButton>
                </Link>

                {Object.keys(landingSections).map((item) => 
                    <ScrollLink to={landingSections[item]} smooth={true} offset={-200}>
                        <NavbarItem>
                            <UnsizedScalingLink style={landingSections[item] === activeSection ? {backgroundColor: "pink"} : {}}>
                                {item}
                            </UnsizedScalingLink>
                        </NavbarItem>
                    </ScrollLink>)}
            </>
            :
            <>
                {/* mobile view */}
                <div className="ml-auto">
                    <div 
                        onClick={e => setIsShowDropdown(!isShowDropdown)}
                    >
                        <Image 
                            src="/icons/hamburger.png"
                            width={35}
                            height={35}
                            alt="hamburger"
                        />
                    </div>
                </div>
            </>
            }
            </NavItemWrapper>
            {isShowDropdown ?
                <>
                    {/* mobile drawer that shows only when hamburger is clicked */}
                    <Drawer />
                </> : <></>
            }
        </NavbarContainer>
        </div>
    );
}

export default Navbar;
