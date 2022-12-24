import Section from "../constants/Section";
import { SLIDE_PROPS_TYPE } from "../../types/props"; 
import tw, { styled } from "twin.macro";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useCallback, useState, useEffect } from "react";
import CircleButton from "../constants/buttons/CircleButton";
import axios from "axios";

const RowWrapper1 = styled(Section.RowWrapper)`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
`;

const Title1 = styled(Section.Title)`
    margin-right: 8%;
    text-align: end;
`;

const SliderColWrapper = styled(Section.ColWrapper)`
    margin-top: 32px;
    margin-bottom: 64px;
    ${tw`
        w-[85%] md:w-[100%]
    `}
`;

const initialSlides:SLIDE_PROPS_TYPE[] = [
    {imgSrc: "https://via.placeholder.com/200x200.png", alt: "TODO"},
    {imgSrc: "https://via.placeholder.com/200x200.png", alt: "TODO"},
    {imgSrc: "https://via.placeholder.com/200x200.png", alt: "TODO"},
    {imgSrc: "https://via.placeholder.com/200x200.png", alt: "TODO"},
    {imgSrc: "https://via.placeholder.com/300x300.png", alt: "TODO"},
];

const References = () => {
    const sectionName = "SumberMateri";
    const sliderRef = useRef<any>(null);
    const [slides, setSlides] = useState<SLIDE_PROPS_TYPE[]>(initialSlides);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    const appendToSlides = (data: any[]): void => {
        data.forEach((value, idx) => {
            setSlides(current => [...current, {
                'imgSrc': value.attributes.url, 
                'alt': value.attributes.alt, 
                'href': value.attributes.externalLink
            }]);
        });
    }
    
    const fetchSlides = (): void => {
        axios
            .get(`/api/landing-material-sources`)
            .then(response => {
                appendToSlides(response.data.data);
                // console.log(response.data.data);
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchSlides();
    }, []);


    return (
        <Section.SectionWrapper className="bg-2-light-blue text-3-tinted-white">
            <RowWrapper1>
                    <Title1>
                        <Element name={sectionName}>
                            Sumber Materi
                        </Element>
                    </Title1>
                    <Section.Body>
                        Bahan materi yang digunakan untuk belajar semuanya diambil dari sini! 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Section.Body>
            </RowWrapper1>
            <Section.RowWrapper>
                <SliderColWrapper>
                    <Swiper
                        navigation={false}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        ref={sliderRef}
                        spaceBetween={0}
                        slidesPerView="auto"
                        breakpoints={{
                            "@0.00": {
                              slidesPerView: 1,
                            },
                            "@0.75": {
                              slidesPerView: 3,
                            },
                            "@1.50": {
                              slidesPerView: 5,
                            },
                          }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}

                    >
                        {slides.map((item:SLIDE_PROPS_TYPE, idx) => {
                            return (
                                <SwiperSlide key={idx} >
                                    <div>
                                        <Image 
                                            src={item.imgSrc}
                                            width={160}
                                            height={160}
                                            alt={item.alt}
                                        />
                                        {/* <p className="absolute top-4 left-4 font-bold text-2xl text-white shadow-md">Slide #{idx}</p> */}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="flex flex-row justify-center mt-5">
                        <CircleButton onClick={handlePrev}>
                            {"←"}
                        </CircleButton>
                        <CircleButton onClick={handleNext}>
                            {"→"}
                        </CircleButton>
                    </div>

                </SliderColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default References;