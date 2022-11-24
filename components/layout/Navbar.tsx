/* eslint-disable react/jsx-key */

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import useMediaQuery from "../utils/media/media";
import { slide as Menu } from "react-burger-menu";

// Top-most navbar container
const NavbarContainer = styled.div`
    ${tw`flex flex-row px-5 md:px-9 py-2 md:py-0 border-b-2 border-gray-200 border-opacity-50 items-center self-center bg-slate-100 `}
`;

// Navbar Branding
const NavbarBranding = styled.div`
    ${tw`flex min-w-max`}
`;

const NavbarBrandingItem = styled.div`
    ${tw`px-5 flex self-center text-black font-semibold text-sm md:text-xl`}
`;

// Navbar Items
const NavItemWrapper = styled.ul`
    ${tw`list-none w-full h-auto lg:h-full flex lg:ml-20`}
`;

const NavbarItem = styled.li`
    ${tw`lg:mr-8 flex items-center justify-center min-h-full text-black cursor-pointer font-medium text-lg lg:text-base`}
`;

const MenuWrapper = styled.div`
    ${tw`absolute right-5 [z-index: 100]`}
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
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    padding: 0 18px;
    line-height: 25px;
    text-align: center;
    align-self: end;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
        background-color: #1c375b;
    }
    &:active {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
    }
    ${tw`ml-auto`}
`;

const Filler = styled.div`
    ${tw`flex ml-auto`}
`;


const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const items:string[] = ["About", "Testimonial", "Katalog", "Motivasi"];

    return(
        <div>
        <NavbarContainer>
            <NavbarBranding>
                <Image src="https://flowbite.com/docs/images/logo.svg" width={40} height={40} alt="Logo Monsieur Rezan" />
                <NavbarBrandingItem>Monsieur Rezan</NavbarBrandingItem>
            </NavbarBranding>
            { isDesktop 
            ? 
                // desktop view: standard NavBar
                <NavItemWrapper>
                    <Filler />
                    {items.map(item => <NavbarItem>{item}</NavbarItem>)}
                    <FancyButton>Daftar Sekarang!</FancyButton>
                </NavItemWrapper>
            :
                // mobile view: hamburger sidebar / drawer
                // TODO: fix the broken hamburger thing
                <MenuWrapper> 
                    <Menu right width={175}>
                        <p className="menu-item"><b>SECTIONS</b></p>
                        {items.map(item => <Link id={item.toLowerCase()} className="menu-item" href={"/"+item}>{item}</Link>)}
                    </Menu>
                </MenuWrapper>
            }
        </NavbarContainer>
        </div>
    );
}

export default Navbar;
