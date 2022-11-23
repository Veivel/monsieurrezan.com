import { Button } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

// Top-most navbar container
const NavbarContainer = styled.div`
    ${tw`flex pl-6 pr-6 py-2 border-b-2 border-gray-200 border-opacity-50 items-center self-center bg-slate-100`}
`;

// Navbar Branding
const NavbarBranding = styled.div`
    ${tw`flex min-w-max`}
`;

const NavbarBrandingItem = styled.div`
    ${tw`px-5 flex self-center text-black text-2xl`}
`;

// Navbar Items
const NavbarItems = styled.ul`
    ${tw`list-none w-full h-auto lg:h-full flex lg:ml-20 justify-center items-center`}
`;

const NavbarItem = styled.li`
    ${tw`lg:mr-8 flex items-center justify-center min-h-full text-black cursor-pointer font-medium text-lg lg:text-base`}
`;

// Call-to-action button
const NavbarButton = styled.button`
    ${tw`bg-sky-600 hover:bg-sky-800 text-white py-2 px-4 rounded-2xl font-bold`}
`;

const Navbar = () => {
    const items:string[] = ["About", "Testimonial", "Katalog", "Motivasi"];
    return(
        <NavbarContainer>
            <NavbarBranding>
                <Image src="https://flowbite.com/docs/images/logo.svg" width={50} height={50} alt="Logo Monsieur Rezan" />
                <NavbarBrandingItem>Monsieur Rezan</NavbarBrandingItem>
            </NavbarBranding>
            <NavbarItems>
                {/* eslint-disable-next-line react/jsx-key */}
                {items.map(item => <NavbarItem>{item}</NavbarItem>)}
            </NavbarItems>
            <NavbarButton>Daftar Sekarang!</NavbarButton>
        </NavbarContainer>
    );
}

export default Navbar;