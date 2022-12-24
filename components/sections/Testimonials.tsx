import Section from "../constants/Section";
import Image from "next/image";
import useMediaQuery from "../utils/media/media";
import { REVIEW_SLIDE_PROPS_TYPE } from "../../types/props";
import tw, { styled } from "twin.macro";
import { Element } from "react-scroll";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const ColWrapper1 = styled(Section.ColWrapper)`
    ${tw`px-8 md:ml-36 mr-0`}
`;

const initialSlides:REVIEW_SLIDE_PROPS_TYPE[] = [

];

const Testimonials = () : JSX.Element => {
    // const setCurrentSection = useGlobalStore(state => state.setActiveSection);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const sectionName = "Testimoni";
    const [slides, setSlides] = useState<REVIEW_SLIDE_PROPS_TYPE[]>(initialSlides);

        /** Append array of (slide) objects to slide State */
        const appendToSlides = (data: any[]): void => {
            data.forEach((value, idx) => {
                setSlides(current => [...current, {
                    'reviewerName': value.attributes.reviewerName,
                    'reviewerInfo': value.attributes.reviewerInfo,
                    'reviewerPicSrc': value.attributes.reviewerPictureSrc,
                    'text': value.attributes.text,
                }]);
            });
        }
    
        const fetchSlides = (): void => {
            axios
                .get(`/api/landing-reviews`)
                .then(response => {
                    appendToSlides(response.data.data);
                })
                .catch(error => {
                    console.log("ERROR: ", error);
                });
        }
    
        useEffect(() => {
            fetchSlides();
        }, []);
    
    return (
        <Section.SectionWrapper className=" bg-3-tinted-white">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col px-[2.5rem] w-[100%] md:pl-[15rem] md:pr-[10rem] md:w-[50%] mr-0 justify-center">
                    <Element name={sectionName}>
                        <Section.Title className="text-center">Kata Mereka</Section.Title>
                    </Element>
                    <Section.Body style={{'textAlign': 'center', 'marginBottom': '30px'}}>Jangan percaya kata kami. Percayakan kata mereka.</Section.Body>
                </div>
                <div className="px-[3.5rem] md:pr-[15rem]">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        slidesPerView="auto"
                        className="effectStuff shadow-xl shadow-gray-700 w-[250px] h-[350px] rounded-xl"
                    >
                        {slides.map((item:REVIEW_SLIDE_PROPS_TYPE, idx) => {
                            return (
                                <SwiperSlide 
                                    key={idx} 
                                    className=" 
                                    bg-1-dark-blue text-3-tinted-white 
                                    flex flex-col justify-start px-4 py-12 rounded-xl"
                                >
                                    <div>
                                        <div className="flex flex-row mb-6">
                                            <div className="relative w-[60px] h-[60px] overflow-hidden mr-3">
                                                <Image 
                                                    src={item.reviewerPicSrc}
                                                    alt={item.reviewerName}
                                                    className="rounded-full"
                                                    style={{'objectFit': 'cover'}}
                                                    fill
                                                />
                                            </div>
                                            <div>
                                                <p className="font-extrabold text-3xl align-middle">
                                                    {item.reviewerName}
                                                </p>
                                                <p className="text-xs">
                                                    {item.reviewerInfo}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-light text-xs md:text-sm">
                                            {'❝ '}
                                                {item.text}
                                            {' ❞'}
                                        </p>
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