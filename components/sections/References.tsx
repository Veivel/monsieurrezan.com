import Section from "../constants/Section";
import SwiffySlider from "../constants/SwiffySlider";
import Image from "next/image";
import { SlideProps } from "../../types/props"; 
import { styled } from "twin.macro";
import { Element } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";

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
    width: 75%;
`;

const References = () => {
    const sectionName = "SumberMateri";
    const setCurrentSection = useGlobalStore(state => state.setActiveSection);

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
                        Mulai dari Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Section.Body>
            </RowWrapper1>
            <Section.RowWrapper>
                <SliderColWrapper>
                    <div className={SwiffySlider.LongerSwiffySlider} data-slider-nav-autoplay-interval="3500">
                        <ul className={SwiffySlider.Container}>
                            {slides.map((item:SlideProps, idx) => {
                                return(
                                <li key={idx} className={item.slideVisible ? "slide-visible" : ""}>
                                    <Image 
                                        src={item.imgSrc} 
                                        alt={item.alt} 
                                        width={200} 
                                        height={200} 
                                    />
                                </li>)
                            })}
                        </ul>
                        <SwiffySlider.Nav />
                    </div>
                </SliderColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default References;