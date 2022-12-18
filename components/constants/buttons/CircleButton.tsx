import tw, { styled } from "twin.macro";

const CircleButton = styled.button`
    border-radius: ${props => props.color || "9999px"};
    ${tw`text-white border bg-sky-800 w-[45px] h-[45px] p-2 mx-2 active:bg-sky-500`}
`;

export default CircleButton;