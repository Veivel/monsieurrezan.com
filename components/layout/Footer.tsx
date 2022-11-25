import tw, { styled } from "twin.macro";
import Branding, { BrandingTitleWhite } from "../elements/Branding";
import useMediaQuery from "../utils/media/media";

// Top-most navbar container
const FooterContainer = styled.footer`
    ${tw`
    flex flex-col md:flex-row justify-between
    md:px-9 py-8 border-b-2
    border-gray-200 border-opacity-50 bg-gray-800
    text-gray-200
    shadow-md align-text-top
    `}
`;

const FooterCol = styled.div`
    ${tw`
        flex flex-col text-center mx-auto
    `}
`;

const FooterGrid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2`}
`;

const FooterGridHeading = styled.p`
    ${tw`py-2 m-1 col-span-1 md:col-span-2 row-span-1 font-bold [text-align-last:center]`}
`;

const FooterGridItem = styled.p`
    ${tw`py-2 m-1 col-span-1 row-span-1`}
`;

const Footer = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const footerPWidth = isDesktop ? "25%" : "70%"

    return (
        <FooterContainer>
            <FooterCol>
                <BrandingTitleWhite>Monsieur Rezan</BrandingTitleWhite>
            </FooterCol>
            <FooterCol style={{width: footerPWidth}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </FooterCol>
            <FooterCol>
                <FooterGrid>
                    <FooterGridHeading>Site Links</FooterGridHeading>
                    <FooterGridItem>Home</FooterGridItem>
                    <FooterGridItem>References</FooterGridItem>
                    <FooterGridItem>Testimonials</FooterGridItem>
                    <FooterGridItem>About</FooterGridItem>
                </FooterGrid>
            </FooterCol>
        </FooterContainer>
    );
}

export default Footer;