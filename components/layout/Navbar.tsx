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

const FancyButton = styled.button`
    background-color: #6f8197;
    border: 2px solid #422800; 
    border-radius: 20px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600; font-size: 16px;
    color: #ffffff;
    padding: 0 18px;
    line-height: 25px;
    text-align: center;
    align-self: end;
    touch-action: manipulation;
    &:hover {
        background-color: #1c375b;
    }
    &:active {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
    }
    ${tw`mr-20 ml-auto`}
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
            <Branding theme="white"/>
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
                    <FancyButton>Daftar Sekarang!</FancyButton>
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
