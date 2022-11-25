import Section from "../elements/Section";
import Image from "next/image";

const Testimonials = () : JSX.Element => {
    return (
        <Section.SectionWrapper color="white" >
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title>Kata Mereka</Section.Title>
                    <Section.Subtitle>Jangan percaya kata kami. Percayakan saja kata mereka.</Section.Subtitle>
                    <Section.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.</Section.Body>
                </Section.ColWrapper>
                <Section.ColWrapper>
                    {/* TODO: replace with owl-carousel   */}
                    <Image src="https://placekitten.com/g/400/300" alt="TODO" width={400} height={300} />
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default Testimonials;