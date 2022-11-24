import tw, { styled } from "twin.macro";

export const SectionTitle = styled.h1`
    ${tw`font-extrabold text-6xl text-black mb-5`}
`;

export const SectionSubtitle = styled.h3`
    ${tw`font-medium text-lg text-gray-600 mt-0`}
`;

export const SectionBody = styled.p`
    ${tw`font-light text-lg text-gray-900 mt-10 mx-60`}
`;

const Section = ({ bgColor }:any) : JSX.Element => {
    const SectionWrapper = styled.div`
        background-color: ${bgColor};
        ${tw`flex flex-col [min-height: 500px] [align-items: center] p-10 justify-center`}
    `; 

    return(
        <SectionWrapper>
            <SectionTitle>What do you want to do?</SectionTitle>
            <SectionSubtitle>Learn French or get French`d?</SectionSubtitle>
            <SectionBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</SectionBody>
        </SectionWrapper>
    );
}

export default Section;