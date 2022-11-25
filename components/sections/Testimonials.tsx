import Section from "../elements/Section";
import Image from "next/image";
import useMediaQuery from "../utils/media/media";
import { SlideProps } from "../../types/props";
import SwiffySlider from "../elements/SwiffySlider";
import tw, { styled } from "twin.macro";
import { Element } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";

const ColWrapper1 = styled(Section.ColWrapper)`
    ${tw`px-8 md:ml-36`}
`;

const Testimonials = () : JSX.Element => {
    const sectionName = "Testimoni";
    const setCurrentSection = useGlobalStore(state => state.setActiveSection);

    const isDesktop = useMediaQuery('(min-width: 960px)');
    const carouselWidth = isDesktop ? "45%" : "65%"
    const slides:SlideProps[] = [
        {imgSrc: "https://placekitten.com/g/300/400", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/301/400", alt: "TODO", slideVisible: true},
        {imgSrc: "https://placekitten.com/g/300/402", alt: "TODO"},
        {imgSrc: "https://placekitten.com/g/301/401", alt: "TODO"},
        {imgSrc: "https://via.placeholder.com/300x400.png", alt: "TODO"},
    ];
    
    return (
        <Section.SectionWrapper color="white">
            <Section.RowWrapper>
                <ColWrapper1>
                    <Element name={sectionName}>
                        <Section.Title>Kata Mereka</Section.Title>
                    </Element>
                    <Section.Body style={{textAlign: "start"}}>Jangan percaya kata kami. Percayakan kata mereka.</Section.Body>
                </ColWrapper1>
                
                <Section.ColWrapper style={{width: carouselWidth}}>
                    <div className={SwiffySlider.SwiffySlider} data-slider-nav-autoplay-interval="5000">
                        <ul className={SwiffySlider.Container}>
                            {slides.map((item:SlideProps, idx) => {
                                return(
                                <li key={idx} className={item.slideVisible ? "slide-visible" : ""}>
                                    <Image src={item.imgSrc} alt={item.alt} width={300} height={400} />
                                </li>)
                            })}
                        </ul>
                        <SwiffySlider.Nav />
                    </div>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default Testimonials;