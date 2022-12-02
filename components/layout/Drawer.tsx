/* eslint-disable react/jsx-key */
import styled from "styled-components";
import tw from "twin.macro";
import Branding from "../constants/Branding";
import { slide as Menu } from "react-burger-menu";
import { Link as RSLink } from "react-scroll";

const MenuWrapper = styled.div`
    ${tw`absolute right-16 [z-index: 100]`}
`;

const Drawer = (props: any) : JSX.Element => { // TODO
    return(
        <MenuWrapper> 
            <Menu right width={175}>
                <p className="menu-item"><b>SECTIONS</b></p>
                {Object.keys(props?.items).map(item => 
                    <RSLink to={props?.items[item]}>
                        {item}
                    </RSLink>
                )}
            </Menu>
        </MenuWrapper>
    ); 
}

export default Drawer;