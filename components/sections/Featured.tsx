import styled, { CSSProperties } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slide from "../basic/Slide";
import { slide } from "../../types/custom";
import useMediaQuery, { Media, MediaContextProvider } from "../../media";
import { useEffect, useState } from "react";

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
  

const indicatorRenderer = ((onClickHandler:any, isSelected:any, index:any, label:any) => {
    if (isSelected) {
        return (
            <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
            />
        );
    }
    return (
        <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />
    );
});

const Featured = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const slides:slide[] = [
        {imgSrc:"https://placekitten.com/1440/640", alt:"alt", legend:"First item"},
        {imgSrc:"https://placekitten.com/g/1440/640", alt:"alt", legend:"Second item"},
        {imgSrc:"https://placekitten.com/1440/641", alt:"alt", legend:"Third item"},
        {imgSrc:"https://via.placeholder.com/1440x640.png", alt:"alt", legend:"Fourth item"},
    ];

    return (
        <FeaturedContainer>
            <Carousel 
                showArrows={true}
                infiniteLoop={true}
                width="100%"
                showStatus={false}
                dynamicHeight={true}
                renderIndicator={indicatorRenderer}
            >
                {slides.map((item:slide, idx) => {
                    return <Slide key={idx} imgSrc={item.imgSrc} alt={item.alt} legend={item.legend} />
                })}
            </Carousel>
        </FeaturedContainer>
    );
}

export default Featured;