import tw, { styled } from "twin.macro";
import Image from "next/image";

export const BrandingWrapper = styled.div`
    ${tw`flex min-w-max`}
`;

export const BrandingTitleBlack = styled.div`
    ${tw`px-5 flex self-center text-black font-extrabold text-lg md:text-xl`}
`;

export const BrandingTitleWhite = styled.div`
    ${tw`px-5 flex self-center text-white font-extrabold text-lg md:text-xl`}
`;

type BrandingProps = {
    theme: string
}

const Branding = (props: BrandingProps) : JSX.Element => {
    return(
        <BrandingWrapper>
            <Image src="https://flowbite.com/docs/images/logo.svg" width={40} height={40} alt="Logo Monsieur Rezan" />
            { props?.theme === "light" 
                ? <BrandingTitleWhite>Monsieur Rezan</BrandingTitleWhite>
                : <BrandingTitleBlack>Monsieur Rezan</BrandingTitleBlack>
            } 
        </BrandingWrapper>
    );
}

export default Branding