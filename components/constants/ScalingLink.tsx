import styled from "styled-components";
import tw from "twin.macro";

const ScalingLink = styled.a`
    &:hover {
        color: #1c375b;
        transform: scale(1.05);
    }
    ${tw`md:h-[80px] md:w-[80px] h-[60px] w-[60px]`}
`;

export const UnsizedScalingLink = styled.a`
    &:hover {
        color: #1c375b;
        transform: scale(1.05);
    }
`;

export default ScalingLink