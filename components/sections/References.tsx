import Section from "../elements/Section";
import Image from "next/image";

const References = () : JSX.Element => {
    return (
        <Section.SectionWrapper color="#66ccff" >
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title>Sumber Kami</Section.Title>
                    <Section.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.</Section.Body>
                </Section.ColWrapper>
                <Section.ColWrapper>
                    <Image src="https://placekitten.com/g/400/300" alt="TODO" width={400} height={300} />
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default References;