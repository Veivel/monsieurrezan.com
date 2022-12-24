import tw, { styled } from "twin.macro";
import Image from "next/image";

export const BrandingWrapper = styled.div`
    ${tw`flex min-w-max`}
`;

export const BrandingTitle = styled.div`
    ${tw`px-5 flex self-center font-extrabold text-xl md:text-xl`}
`;

export const BrandingTitleBlack = styled(BrandingTitle)`
    ${tw`text-black`}
`;

export const BrandingTitleWhite = styled(BrandingTitle)`
    ${tw`text-white`}
`;

type BrandingProps = {
    theme: string
}

const Branding = (props: BrandingProps) : JSX.Element => {
    return(
        <BrandingWrapper>
            <Image src="https://flowbite.com/docs/images/logo.svg" width={40} height={40} alt="Logo Monsieur Rezan" />
            <BrandingTitle>
            { props?.theme === "dark"
                ? 
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-2-light-blue to-4-light-red">
                    monsieurrezan
                </h1>
                : 
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-1-dark-blue to-5-dark-red">
                    monsieurrezan
                </h1>
            }
            </BrandingTitle>
        </BrandingWrapper>
    );
}

export default Branding