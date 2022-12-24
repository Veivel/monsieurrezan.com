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
        <Section.SectionWrapper className="bg-5-dark-red text-3-tinted-white">
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title style={{textAlign: "center"}}>
                        <Element name={SectionName}>
                            Salut, je suis <br/> Monsieur Rezan!
                        </Element>
                    </Section.Title>
                    <Section.RowWrapper className="mx-4 md:mx-32 gap-x-8">
                        <Image 
                            className="shadow-md shadow-gray-600"
                            src="https://placekitten.com/600/900"
                            width={600}
                            height={900}
                            alt="TODO"
                        />
                        <div className="flex flex-col">
                            <Section.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Section.Body>
                            <Section.Body>
                                Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:
                            </Section.Body>
                                <ul className="font-light text-base md:text-lg text-justify my-4">
                                    <li>1. Uno dos tres</li>
                                    <li>2. Satu dua tiga</li>
                                    <li>3. Empat lima</li>
                                    <li>5. Makan jagung</li>
                                </ul>
                        </div>
                    </Section.RowWrapper>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default WhoAmI;