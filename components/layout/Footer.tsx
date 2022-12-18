import tw, { styled } from "twin.macro";
import Branding, { BrandingTitleWhite } from "../constants/Branding";
import useMediaQuery from "../utils/media/media";
import Link from "next/link";
import ScalingLink, { UnsizedScalingLink } from "../constants/ScalingLink";
import Image from "next/image";
import SOCIAL_LINKS from "../constants/data/socials";

// Top-most navbar container
const FooterContainer = styled.footer`
    ${tw`
    flex flex-col md:flex-row justify-between
    md:px-9 py-8 bg-gray-800 text-gray-200
    shadow-md align-text-top
    `}
`;

const FooterRow = styled.div`
    ${tw`
        flex flex-row text-center justify-center gap-x-4
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

const FooterLink = styled.a`
    ${tw`[text-decoration-line: none] [color: lightskyblue] hover:[text-decoration: underline] hover:[cursor: pointer]`}
`;

const Footer = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const footerPWidth = isDesktop ? "25%" : "70%"

    return (
        <>
            <FooterContainer>
                <FooterCol>
                    <BrandingTitleWhite>Monsieur Rezan</BrandingTitleWhite>
                    <FooterGridItem>Temukan kami di:</FooterGridItem>
                    <FooterRow>
                    {/* <div className="
                            flex flex-row justify-center py-4
                            gap-x-6 bg-white rounded-b-xl
                        "> */}
                            <UnsizedScalingLink href={SOCIAL_LINKS['tiktok']} target="_blank">
                                <Image
                                    src="/icons/social/white-tiktok.png"
                                    width={30}
                                    height={30}
                                    alt="tiktok"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['instagram']} target="_blank">
                                <Image
                                    src="/icons/social/white-instagram.png"
                                    width={30}
                                    height={30}
                                    alt="instagram"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['whatsapp']} target="_blank">
                                <Image
                                    src="/icons/social/white-whatsapp.png"
                                    width={30}
                                    height={30}
                                    alt="whatsapp"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['youtube']} target="_blank">
                                <Image
                                    src="/icons/social/white-youtube.png"
                                    width={30}
                                    height={30}
                                    alt="youtube"
                                />
                            </UnsizedScalingLink>
                        {/* </div> */}
                    </FooterRow>
                </FooterCol>
                <FooterCol style={{width: footerPWidth}}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </FooterCol>
                <FooterCol>
                    <FooterGrid>
                        <FooterGridHeading>Site Links</FooterGridHeading>
                        <FooterGridItem>Home</FooterGridItem>
                        <FooterGridItem>Pendaftaran</FooterGridItem>
                    </FooterGrid>
                </FooterCol>
            </FooterContainer>
            <FooterRow 
                className="text-white py-3 gap-12 text-sm"
                style={{'backgroundColor': 'rgb(18, 35, 40)'}}
            >
                <p>
                    © Monsieur Rezan 2022
                </p>
                <p>|</p>
                <p>
                    Website ini dibangun oleh <FooterLink href="https://github.com/veivel">Veivel</FooterLink>.
                </p>
            </FooterRow>
        </>
    );
}

export default Footer;