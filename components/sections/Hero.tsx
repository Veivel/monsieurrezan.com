import styled, { CSSProperties } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slide from "../constants/Slide";
import { SLIDE_PROPS_TYPE } from "../../types/props";
import useMediaQuery from "../utils/media/media";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useCallback } from "react";
import CircleButton from "../constants/buttons/CircleButton";

const FeaturedContainer = styled.div`
    ${tw`
        w-screen
        h-52
        md:h-full
        justify-center
        items-center
        mt-20
        md:mt-10
    `}
`;

const slides:SLIDE_PROPS_TYPE[] = [
    {imgSrc:"https://placekitten.com/1440/640", alt:"alt", legend:"Label ini adalah yang namanya legend! Promosikan produk bla bla bla work in progress, work in progress bla bla."},
    {imgSrc:"https://placekitten.com/g/1440/640", alt:"alt", legend:"Second item"},
    {imgSrc:"https://placekitten.com/1440/641", alt:"alt", legend:"Third item"},
    {imgSrc:"https://via.placeholder.com/1440x640.png", alt:"alt", legend:"Fourth item"},
];

const Featured = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <FeaturedContainer>
            { isDesktop ? <CircleButton 
                className="bg-white text-xl absolute z-[98] left-8 top-60 md:top-24 lg:top-80" 
                onClick={handlePrev}
            >
                {"←"}
            </CircleButton> : <></>}
            <Swiper
                navigation={false} 
                pagination={{
                    // dynamicBullets: true,
                    clickable: true
                }}
                modules={[Navigation, Pagination, Autoplay]}
                ref={sliderRef}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((item:SLIDE_PROPS_TYPE, idx) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <SwiperSlide>
                            <div>
                                <Image 
                                    src={item.imgSrc}
                                    width={1440}
                                    height={600}
                                    alt={item.alt}
                                />
                                <p className="absolute top-12 md:top-24 left-4 md:left-24 font-bold md:font-extrabold text-4xl md:text-6xl text-white shadow-sm">Slide #{idx}</p>
                                <p className="absolute top-[5.5rem] md:top-40 left-4 md:left-24 font-light text-xl text-white shadow-sm">Masukkan dynamic text.</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            { isDesktop ? <CircleButton 
                className="bg-white text-xl absolute z-[98] right-8 top-60 md:top-24 lg:top-80" 
                onClick={handleNext}
            >
                {"→"}
            </CircleButton> : <></> }
        </FeaturedContainer>
    );
}

export default Featured;