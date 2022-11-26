import Section from "../elements/Section";
import Image from "next/image";
import tw, { styled } from "twin.macro";

const ColWrapper1 = styled(Section.ColWrapper)`
    ${tw`[width: 25%] px-16`}
`;

const WhoAmI = () : JSX.Element => {
    return(
        <Section.SectionWrapper color="white">
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title style={{textAlign: "center"}}>Salut, Je suis Monsieur Rezan!</Section.Title>
                    <Section.RowWrapper>
                    <Image 
                        className="shadowed"
                        src="https://placekitten.com/300/400"
                        width={300}
                        height={400}
                        alt="TODO"
                    />
                    <ColWrapper1>
                        <Section.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            <br/>
                            Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:
                            {/* <ul>
                                <li>Uno dos tres</li>
                                <li>Satu dua tiga</li>
                                <li>Empat lima</li>
                                <li>Makan jagung</li>
                            </ul> */}
                        </Section.Body>
                    </ColWrapper1>
                    </Section.RowWrapper>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default WhoAmI;