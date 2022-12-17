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
import ScalingLink from "../constants/ScalingLink";

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
    ${tw`w-full h-auto lg:h-full flex flex-row lg:ml-20`}
`;

const NavbarItem = styled.li`
    ${tw`md:mr-8 flex items-center justify-center min-h-full text-black cursor-pointer font-normal text-lg md:text-base`}
`;

// Call-to-action button
const NavbarButton = styled.button`
    white-space: nowrap;
    ${tw`bg-gray-700 hover:bg-black text-white text-base py-2 px-4 rounded-2xl font-bold`}
`;

const Filler = styled.div`
    ${tw`flex ml-auto`}
`;

const ReverseFlex = styled.div`${tw`flex flex-row-reverse mr-12`}`;

export type SECTION_MAP = {
    [item: string]: string
}

const items: SECTION_MAP = {
    /** [judul]: [link / scroll link] */

    // "En Français": "FirstSection", 
    "Sumber Materi": "SumberMateri",
    "Testimoni": "Testimoni", 
    "Katalog Paket": "Paket", 
    "Tentang Saya": "TentangSaya"
};

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
                <Filler />
                {Object.keys(items).map((item) => 
                    <ScrollLink to={items[item]} smooth={true} offset={-200}>
                        <NavbarItem>
                            <ScalingLink style={items[item] === activeSection ? {backgroundColor: "pink"} : {}}>
                                {item}
                            </ScalingLink>
                        </NavbarItem>
                    </ScrollLink>)}
                <Link style={{color: "white", textDecorationLine: "none"}}href="/daftar/">
                    <FancyButton>
                        Daftar Sekarang!
                    </FancyButton>
                </Link>
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
            {
            isShowDropdown ?
            <>
                {/* mobile drawer that shows only when hamburger is clicked */}
                <Drawer items={items}/>
            </>
            :
            <></>
            }
        </NavbarContainer>
        </div>
    );
}

export default Navbar;
