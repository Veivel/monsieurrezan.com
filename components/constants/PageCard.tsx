import tw, { styled } from "twin.macro";

export const CardHeader = styled.h1`
    ${tw`font-extrabold text-xl md:text-4xl my-0 [text-align: center]`}
`;
export const CardSubheader = styled.h1`
    ${tw`text-base md:text-lg [text-align: center]`}
`;

export const CardContainer = styled.div`
    ${tw`
        text-black md:text-gray-800 rounded-3xl shadow-black shadow-xl mx-8 
        [width: 80%] md:[width: 800px] [min-height: 550px] md:[min-height: 600px] 
        [background-color:#fafafa] 
    `}
`;

export const CardContentWrapper = styled.div`
    ${tw`px-2 md:px-8 py-8`}
`;