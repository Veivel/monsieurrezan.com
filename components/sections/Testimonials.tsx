import Section from "../constants/Section";
import Image from "next/image";
import useMediaQuery from "../utils/media/media";
import { REVIEW_SLIDE_PROPS_TYPE } from "../../types/props";
import { Element } from "react-scroll";
import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const initialSlides:REVIEW_SLIDE_PROPS_TYPE[] = [];

const Testimonials = () : JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const sectionName = "Testimoni";
    const [data, setData] = useState<any>();
    
    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[testimonials][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.testimonials)
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <Section.SectionWrapper 
            style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}
        >
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col px-[2.5rem] w-[100%] md:pl-[15rem] md:pr-[10rem] md:w-[50%] mr-0 justify-center">
                    <Element name={sectionName}>
                        <Section.Title className="text-center">Kata Mereka</Section.Title>
                    </Element>
                    <Section.Body style={{'textAlign': 'center', 'marginBottom': '30px'}}>
                        Jangan percaya kata kami. Percayakan kata mereka.
                    </Section.Body>
                </div>
                <div className="px-[3.5rem] md:pr-[15rem]">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        slidesPerView="auto"
                        className="effectStuff shadow-xl shadow-gray-700 w-[250px] h-[350px] rounded-xl"
                    >
                        {data?.review.map((item:REVIEW_SLIDE_PROPS_TYPE, idx:number) => {
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
                                                    src={item.reviewerPictureUrl}
                                                    alt={item.reviewerName}
                                                    className="rounded-full"
                                                    style={{'objectFit': 'cover'}}
                                                    fill
                                                />
                                            </div>
                                            <div>
                                                <h2 className="font-extrabold text-2xl align-middle">
                                                    {item.reviewerName}
                                                </h2>
                                                <p className="text-xs">
                                                    {item.reviewerInfo}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-light text-sm">
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