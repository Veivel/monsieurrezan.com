/* eslint-disable react/jsx-key */

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import useMediaQuery from "../utils/media/media";
import { slide as Menu } from "react-burger-menu";
import Branding from "../elements/Branding";
import { Link as RSLink } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";
import FancyButton from "../elements/FancyButton";

// Top-most navbar container
const NavbarContainer = styled.header`
    ${tw`
    fixed [z-index: 99] w-full
    flex flex-row items-center self-center
    px-5 md:px-9 py-4 md:py-2 border-b-2
    border-gray-200 border-opacity-50 bg-slate-100
    shadow-md
    `}
`;

// Navbar Items
const NavItemWrapper = styled.ul`
    ${tw`list-none w-full h-auto lg:h-full flex lg:ml-20`}
`;

const NavbarItem = styled.li`
    ${tw`lg:mr-8 flex items-center justify-center min-h-full text-black cursor-pointer font-normal text-lg lg:text-base`}
`;

const MenuWrapper = styled.div`
    ${tw`absolute right-16 [z-index: 100]`}
`;

const Linkable = styled.div`
    &:hover {
        color: #1c375b;
        transform: scale(1.05);
    }
`;

// Call-to-action button
const NavbarButton = styled.button`
    white-space: nowrap;
    ${tw`bg-gray-700 hover:bg-black text-white text-base py-2 px-4 rounded-2xl font-bold`}
`;

const Filler = styled.div`
    ${tw`flex ml-auto`}
`;


const Navbar = () => {
    const activeSection = useGlobalStore(state => state.activeSection);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const items: {[item: string]: string} = {
        // "En Français": "FirstSection", 
        "Sumber Materi": "SumberMateri",
        "Testimoni": "Testimoni", 
        "Paket": "Paket", 
    };

    return(
        <div>
        <NavbarContainer>
            <Link href="/" style={{textDecorationLine: "none"}}>
                <Branding theme="white"/>
            </Link>
            { isDesktop 
            ? 
                // desktop view: standard NavBar
                <NavItemWrapper>
                    <Filler />
                    {Object.keys(items).map((item) => 
                        <RSLink to={items[item]} smooth={true} offset={-200}>
                            <NavbarItem>
                                <Linkable style={items[item] === activeSection ? {backgroundColor: "pink"} : {}}>
                                    {item}
                                </Linkable>
                            </NavbarItem>
                        </RSLink>)}
                    <Link style={{color: "white", textDecorationLine: "none"}}href="/daftar/">
                        <FancyButton>
                            Daftar Sekarang!
                        </FancyButton>
                    </Link>
                </NavItemWrapper>
            :
                // mobile view: hamburger sidebar / drawer
                // TODO: fix the broken hamburger thing
                <MenuWrapper> 
                    <Menu right width={175}>
                        <p className="menu-item"><b>SECTIONS</b></p>
                        {Object.keys(items).map(item => 
                            <RSLink to={items[item]}>
                                {item}
                            </RSLink>
                        )}
                    </Menu>
                </MenuWrapper>
            }
        </NavbarContainer>
        </div>
    );
}

export default Navbar;
