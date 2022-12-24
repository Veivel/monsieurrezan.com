/* eslint-disable react/jsx-key */
import styled from "styled-components";
import tw from "twin.macro";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { landingSections } from "../constants/data/sections";
import { pages } from "../constants/data/pages";

const MenuWrapper = styled.div`
    @keyframes slideIn {
      from {left: -15rem;}
      to {left: 0rem;}
    }

    animation-name: slideIn;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
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

const Drawer = () : JSX.Element => { // TODO
    return(
        <MenuWrapper>
          <MenuContent>
            {Object.keys(landingSections).map((key, index) => (
              <ScrollLink
                key={index}
                to={landingSections[key]}
              >
                <div className="z-40 text-black font-semibold text-xl my-6">
                  {key}
                </div>
              </ScrollLink>
            ))}

            {Object.keys(pages).map((key, index) => (
              <Link
                key={index}
                href={pages[key]}
              >
                <div className="z-40 text-blue font-semibold text-xl my-6">
                  {key}
                </div>
              </Link>
            ))}
          </MenuContent>
      </MenuWrapper>
    ); 
}

export default Drawer;