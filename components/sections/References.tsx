import Section from "../constants/Section";
import { SlideProps } from "../../types/props"; 
import tw, { styled } from "twin.macro";
import { Element } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useCallback } from "react";
import CircleButton from "../constants/buttons/CircleButton";

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

const References = () => {
    const sectionName = "SumberMateri";
    
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    const slides:SlideProps[] = [
        {imgSrc: "https://placekitten.com/g/201/200", alt: "TODO", slideVisible: true},
        {imgSrc: "https://placekitten.com/g/200/200", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/200/201", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/201/201", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/202/200", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/202/202", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/203/200", alt: "TODO"},
        {imgSrc: "https://via.placeholder.com/200x200.png", alt: "TODO"},
    ];

    return (
        <Section.SectionWrapper color="#66ccff">
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
                              slidesPerView: 2,
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
                        {slides.map((item:SlideProps, idx) => {
                            return (
                                <SwiperSlide key={idx} >
                                    <div>
                                        <Image 
                                            src={item.imgSrc}
                                            width={150}
                                            height={150}
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