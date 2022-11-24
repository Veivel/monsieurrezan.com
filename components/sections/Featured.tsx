import styled, { CSSProperties } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { slide } from "../../types/custom";
import useMediaQuery from "../utils/media/media";

const FeaturedContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-full
        justify-center
        items-center
        xl:mt-10
        bg-amber-400
    `}
`;

const indicatorStyles: CSSProperties = {
    background: '#fff',
    borderRadius: '10px',
    width: 20,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    opacity: '50%'
};
  

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
            
        </FeaturedContainer>
    );
}

export default Featured;