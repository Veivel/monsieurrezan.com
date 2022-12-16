import Section from "../constants/Section";
import Image from "next/image";
import { Element } from "react-scroll";
import tw, { styled } from "twin.macro";

const ColWrapper1 = styled(Section.ColWrapper)`
    ${tw`[width: 70%] px-16`}
`;

const WhoAmI = () : JSX.Element => {
    const SectionName = "TentangSaya"

    return(
        <Section.SectionWrapper color="white">
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title style={{textAlign: "center"}}>
                        <Element name={SectionName}>
                            Salut, je suis <br/> Monsieur Rezan!
                        </Element>
                    </Section.Title>
                    <Section.RowWrapper>
                    <Image 
                        className="shadowed"
                        src="https://placekitten.com/250/350"
                        width={250}
                        height={350}
                        alt="TODO"
                    />
                    <ColWrapper1>
                        <Section.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Section.Body>
                        <Section.Body>
                            Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:
                        </Section.Body>
                            <ul className="font-light text-base md:text-lg text-gray-900 text-justify my-4">
                                <li>1. Uno dos tres</li>
                                <li>2. Satu dua tiga</li>
                                <li>3. Empat lima</li>
                                <li>5. Makan jagung</li>
                            </ul>
                    </ColWrapper1>
                    </Section.RowWrapper>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default WhoAmI;