import tw, { styled } from "twin.macro";
import Branding, { BrandingTitleWhite } from "../elements/Branding";

// Top-most navbar container
const FooterContainer = styled.footer`
    ${tw`
    flex flex-row justify-between
    md:px-9 py-8 border-b-2
    border-gray-200 border-opacity-50 bg-gray-800
    text-gray-200
    shadow-md align-text-top
    `}
`;

const FooterCol = styled.div`
    ${tw`
        flex flex-col text-center
    `}
`;

const FooterGrid = styled.div`
    ${tw`grid grid-cols-2`}
`;

const FooterSubhead = styled.p`
    ${tw`py-2 m-1 col-span-2 row-span-1 font-bold [text-align-last:center]`}
`;

const FooterP = styled.p`
    ${tw`py-2 m-1 col-span-1 row-span-1`}
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterCol>
                <BrandingTitleWhite>Monsieur Rezan</BrandingTitleWhite>
            </FooterCol>
            <FooterCol style={{width: '25%'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </FooterCol>
            <FooterCol>
                <FooterGrid>
                    <FooterSubhead>Site Links</FooterSubhead>
                    <FooterP>Home</FooterP>
                    <FooterP>References</FooterP>
                    <FooterP>Testimonials</FooterP>
                    <FooterP>About</FooterP>
                </FooterGrid>
            </FooterCol>
        </FooterContainer>
    );
}

export default Footer;