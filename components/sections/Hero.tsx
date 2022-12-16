import styled, { CSSProperties } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slide from "../constants/Slide";
import { SlideProps } from "../../types/props";
import useMediaQuery from "../utils/media/media";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturedContainer = styled.div`
    ${tw`
        w-screen
        h-full
        justify-center
        items-center
        xl:mt-10
    `}
`;

const slides:SlideProps[] = [
    {imgSrc:"https://placekitten.com/1440/640", alt:"alt", legend:"Label ini adalah yang namanya legend! Promosikan produk bla bla bla work in progress, work in progress bla bla."},
    {imgSrc:"https://placekitten.com/g/1440/640", alt:"alt", legend:"Second item"},
    {imgSrc:"https://placekitten.com/1440/641", alt:"alt", legend:"Third item"},
    {imgSrc:"https://via.placeholder.com/1440x640.png", alt:"alt", legend:"Fourth item"},
];

const Featured = () => {
    // const isDesktop = useMediaQuery('(min-width: 960px)');


    return (
        <FeaturedContainer>
            <Swiper
                navigation={true} 
                pagination={{
                    // dynamicBullets: true,
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                loop={true}
            >
                {slides.map((item:SlideProps, idx) => {
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
                                <p className="absolute top-24 left-24 font-extrabold text-6xl">Slide #{idx}</p>
                                <p className="absolute top-40 left-24 font-light text-xl">Masukkan dynamic text.</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </FeaturedContainer>
    );
}

export default Featured;