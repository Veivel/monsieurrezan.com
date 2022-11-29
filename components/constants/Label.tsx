import tw, { styled } from "twin.macro";

export const LabelContainer = styled.div`
    ${tw`absolute flex flex-col mr-[75%] mt-36`}
`;

export const Label = styled.div`
    ${tw`absolute [z-index: 100] bg-blue-50 [border-radius: 25%] [width: 300px] [height: 300px]`}
`;

export const LabelTitle = styled.p`
    ${tw`font-extrabold text-lg mx-14 mt-10 text-center`}
`;

export const LabelContent = styled.p`
    ${tw`mx-14 mb-auto text-center font-light`}
`;