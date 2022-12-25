import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { CAPTIONED_SLIDE_PROPS_TYPE } from "../../types/props";
import useMediaQuery from "../utils/media/media";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useCallback, useEffect, useState } from "react";
import CircleButton from "../constants/buttons/CircleButton";
import axios from "axios";

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

const initialSlides:CAPTIONED_SLIDE_PROPS_TYPE[] = [];

const Hero = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const sliderRef = useRef<any>(null);
    const [slides, setSlides] = useState<CAPTIONED_SLIDE_PROPS_TYPE[]>(initialSlides);

    /** Append array of (slide) objects to slide State */
    const appendToSlides = (data: any[]): void => {
        data.forEach((item, idx) => {
            setSlides(current => [...current, {
                'url': item.url, 
                'alt': item.alt, 
                'captionText': item.captionText,
                'captionTitle': item.captionTitle,
            }]);
        });
    }

    const fetchSlides = (): void => {
        axios
            .get(`/api/landing?populate[hero][populate]=*`)
            .then(response => {
                appendToSlides(response.data.data.attributes.hero.slides);
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchSlides();
    }, []);

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
                className="text-xl absolute z-[98] left-8 top-60 md:top-24 lg:top-80" 
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
                {slides.map((item:CAPTIONED_SLIDE_PROPS_TYPE, idx) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <SwiperSlide>
                            <div className="w-[1440px] h-[640px] overflow-hidden">
                                <Image 
                                    src={item.url}
                                    alt={item.alt}
                                    fill
                                    style={{'objectFit': 'cover'}}
                                />
                                <h1 className="absolute top-12 md:top-24 left-4 md:left-24 font-bold md:font-extrabold text-4xl md:text-6xl text-white shadow-sm">
                                    {item.captionTitle}
                                </h1>
                                <p className="absolute top-[5.5rem] md:top-40 left-4 md:left-24 font-light text-xl text-white shadow-sm">
                                    {item.captionText}
                                </p>
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

export default Hero;