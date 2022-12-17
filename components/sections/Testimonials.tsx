import Section from "../constants/Section";
import Image from "next/image";
import useMediaQuery from "../utils/media/media";
import { SLIDE_PROPS_TYPE } from "../../types/props";
import tw, { styled } from "twin.macro";
import { Element } from "react-scroll";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ColWrapper1 = styled(Section.ColWrapper)`
    ${tw`px-8 md:ml-36 mr-0`}
`;

const Testimonials = () : JSX.Element => {
    // const setCurrentSection = useGlobalStore(state => state.setActiveSection);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    
    const sectionName = "Testimoni";
    const slides:SLIDE_PROPS_TYPE[] = [
        {imgSrc: "https://placekitten.com/g/300/400", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/301/400", alt: "TODO", slideVisible: true},
        {imgSrc: "https://placekitten.com/g/300/402", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/301/401", alt: "TODO"},
        {imgSrc: "https://via.placeholder.com/300x400.png", alt: "TODO"},
    ];
    
    return (
        <Section.SectionWrapper color="white">
            <div className="flex flex-row">
                <div className="flex flex-col pl-[15rem] pr-[10rem] w-[50%] mr-0 justify-center">
                    <Element name={sectionName}>
                        <Section.Title>Kata Mereka</Section.Title>
                    </Element>
                    <Section.Body>Jangan percaya kata kami. Percayakan kata mereka.</Section.Body>
                </div>
                <div className="pl-[2rem] pr-[15rem]">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        slidesPerView="auto"
                        className="effectStuff shadow-xl shadow-gray-700 w-full ml-0"
                    >
                        {slides.map((item:SLIDE_PROPS_TYPE, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="w-[60px] h-[400px]">
                                        <Image 
                                            src={item.imgSrc}
                                            fill
                                            alt={item.alt}
                                        />
                                        <div>
                                            <p className="absolute top-8 left-4 font-extrabold text-xl text-white shadow-md">{'"'}Gurunya asik!{'"'}</p>
                                            <p className="absolute top-20 left-4 text-sm text-white">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </Section.SectionWrapper>
    );
}

export default Testimonials;