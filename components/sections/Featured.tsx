import styled from "styled-components";
import tw from "twin.macro";

const FeaturedContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `}
`;

const Featured = () => {
    return (
        <FeaturedContainer>
            <h1>insert carousel here</h1>
        </FeaturedContainer>
    );
}

export default Featured;