import Image from "next/image";
import Section from "../constants/Section";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useRef, useCallback, useState, useEffect } from "react";
import { SLIDE_PROPS_TYPE } from "../../types/props";
import CircleButton from "../constants/buttons/CircleButton";
import useMediaQuery from "../utils/media/media";
import axios from "axios";

const Documentation = () : JSX.Element => {
    const sliderRef = useRef<any>(null);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const [data, setData] = useState<any>();
    
    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[galeriDokumentasi][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.galeriDokumentasi)
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
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
        <div 
            className="flex flex-row w-screen h-[600px] md:h-[750px] py-12"
            style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}
        >
            <div className="w-full">
                <Section.ColWrapper className="text-center">
                    <Section.Title className="">
                        The Journey So Far
                    </Section.Title>
                    <p className="text-center text-lg font-extralight">
                        Berikut galeri dokumentasi dari kelas kursus Monsieur Rezan.
                    </p>
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
                                modules={[FreeMode, Navigation, Pagination]}
                            >
                                {data?.slides.map((item:SLIDE_PROPS_TYPE, idx: number) => {
                                    return (
                                        <SwiperSlide key={idx} >
                                            <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-xl">
                                                <Image 
                                                    src={item.url}
                                                    alt={item.alt}
                                                    className="rounded-xl"
                                                    fill
                                                    sizes="50vw, (min-width: 768px) 100vw"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
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