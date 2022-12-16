import Section from "../constants/Section";

const About = () : JSX.Element => {
    return (
        <Section.SectionWrapper color="white" style={{height: "600px"}}>
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title>Mau belajar <br/>bahasa perancis?</Section.Title>
                    <Section.Subtitle>Vous voulez étudiez le français?</Section.Subtitle>
                    <Section.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </Section.Body>
                    <Section.Body>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </Section.Body>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default About;