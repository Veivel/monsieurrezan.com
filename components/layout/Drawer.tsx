/* eslint-disable react/jsx-key */
import styled from "styled-components";
import tw from "twin.macro";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { SECTION_MAP } from "./Navbar";

const MenuWrapper = styled.div`
    ${tw`
    absolute left-0 top-0 [z-index: 100] flex flex-col z-50 
    w-[60%] h-screen
    `}
`;

const MenuContent = styled.div`
  ${tw`
    bg-white w-full h-full gap-24 px-5 py-24 shadow-2xl
  `}
`;

const Drawer = ({items}:{items:SECTION_MAP}) : JSX.Element => { // TODO
    return(
        <MenuWrapper>
          <MenuContent>
            {Object.keys(items).map((key, index) => (
              <ScrollLink
                key={index}
                // href={items[key]}
                to={items[key]}
              >
                <div className="z-40 text-black font-semibold text-xl my-6">
                  {key}
                </div>
              </ScrollLink>
            ))}
          </MenuContent>
      </MenuWrapper>
    ); 
}

export default Drawer;