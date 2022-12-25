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

const initialSlides:SLIDE_PROPS_TYPE[] = [];

const References = () => {
    const sectionName = "SumberMateri";
    const sliderRef = useRef<any>(null);
    const [data, setData] = useState<any>();

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);
    
    const fetchSlides = (): void => {
        axios
            .get(`/api/landing?populate[SumberMateri][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.SumberMateri);
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchSlides();
    }, []);


    return (
        <Section.SectionWrapper
            style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}>
            <RowWrapper1>
                    <Title1>
                        <Element name={sectionName}>
                            Sumber Materi
                        </Element>
                    </Title1>
                    <Section.Body>{data?.body}</Section.Body>
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
                        {data?.slides.map((item:SLIDE_PROPS_TYPE, idx:number) => {
                            return (
                                <SwiperSlide key={idx} >
                                    <div>
                                        <Image 
                                            src={item.url}
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