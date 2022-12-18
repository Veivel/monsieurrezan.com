import Image from "next/image";
import Section from "../constants/Section";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRef, useCallback, useState } from "react";
import { SLIDE_PROPS_TYPE } from "../../types/props";
import CircleButton from "../constants/buttons/CircleButton";
import useMediaQuery from "../utils/media/media";


const Documentation = () : JSX.Element => {
    // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const sliderRef = useRef<any>(null);
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    const slides:SLIDE_PROPS_TYPE[] = [
        {imgSrc: "https://placekitten.com/g/900/598", alt: "TODO", slideVisible: true},
        {imgSrc: "https://placekitten.com/g/902/600", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/898/602", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/898/600", alt: "TODO"},
        {imgSrc: "https://via.placeholder.com/900x600.png", alt: "TODO"},
    ];

    return (
        <div className="flex flex-row w-screen h-[600px] md:h-[750px] py-12" style={{'backgroundColor': "#66ccff"}}>
            <div className="w-full">
                <Section.ColWrapper className="text-center">
                    <Section.Title className="">The Journey So Far</Section.Title>
                    <div>
                        Berikut galeri dokumentasi dari kelas kursus Monsieur Rezan.
                    </div>
                    <div className="flex flex-row justify-center my-14">
                        { isDesktop ? <CircleButton onClick={handlePrev} className="my-auto">
                            {"←"}
                        </CircleButton> : <></> }
                        <div className="w-[300px] md:w-[600px]">
                            <Swiper
                                spaceBetween={10}
                                pagination={true}
                                loop={true}
                                ref={sliderRef}
                                // thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Pagination]}
                            >
                                {slides.map((item:SLIDE_PROPS_TYPE, idx) => {
                                    return (
                                        <SwiperSlide key={idx} >
                                            <div className="w-[300px] h-[200px] md:w-[600px] md:h-[400px]">
                                                <Image 
                                                    src={item.imgSrc}
                                                    fill
                                                    alt={item.alt}
                                                />
                                                {/* <p className="absolute top-4 left-4 font-bold text-2xl text-white shadow-md">Slide #{idx}</p> */}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            {/* <Swiper
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="thumbsSwiper"
                            >
                                {slides.map((item:SLIDE_PROPS_TYPE, idx) => {
                                    return (
                                        <SwiperSlide key={idx} >
                                            <Image 
                                                src={item.imgSrc}
                                                width={150}
                                                height={100}
                                                alt={item.alt}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper> */}
                        </div>
                        { isDesktop ? <CircleButton onClick={handleNext} className="my-auto">
                            {"→"}
                        </CircleButton> : <></> }
                    </div>
                    { !isDesktop ? <div>
                        <CircleButton onClick={handlePrev} className="my-auto">
                            {"←"}
                        </CircleButton> 
                        <CircleButton onClick={handleNext} className="my-auto">
                            {"→"}
                        </CircleButton>
                    </div> : <></> }
                </Section.ColWrapper>
            </div>
        </div>
    );
}

export default Documentation;