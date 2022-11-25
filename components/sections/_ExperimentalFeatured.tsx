import styled, { CSSProperties } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { slide } from "../../types/props";
import useMediaQuery from "../utils/media/media";

const FeaturedContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        xl:mt-10
        bg-amber-400
    `}
`;
  

const Featured = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const desktopSlides:slide[] = [
        {imgSrc:"https://placekitten.com/1440/640", alt:"alt", legend:"Label ini adalah yang namanya legend! Promosikan produk bla bla bla work in progress, work in progress bla bla."},
        {imgSrc:"https://placekitten.com/g/1440/640", alt:"alt", legend:"Second item"},
        {imgSrc:"https://placekitten.com/1440/641", alt:"alt", legend:"Third item"},
        {imgSrc:"https://via.placeholder.com/1440x640.png", alt:"alt", legend:"Fourth item"},
    ];

    return (
        <FeaturedContainer>
            <p> not implemented yet (use the other one) </p>
        </FeaturedContainer>
    );
}

export default Featured;