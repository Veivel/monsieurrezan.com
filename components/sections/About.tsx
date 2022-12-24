import Section from "../constants/Section";

const About = () : JSX.Element => {
    return (
        <Section.SectionWrapper className="h-[660px] md:h-[600px] bg-1-dark-blue text-3-tinted-white mt-[150%] md:mt-0">
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title className="w-[110%]">Mau belajar bahasa perancis?</Section.Title>
                    <Section.Subtitle>Vous voulez étudiez le français?</Section.Subtitle>
                    <br />
                    <Section.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </Section.Body>
                    <br/>
                    <div className="grid grid-cols-2 md:flex md:flex-row justify-around gap-4 md:gap-x-8 text-center font-light text-sm md:text-lg">
                        <div>
                            <p className="w-full font-black">POINT 1</p>
                            <p>Bisa makan sambil ngapa-ngapain.</p>
                        </div>
                        <div>
                            <p className="w-full font-black">POINT 2</p>
                            <p>Bisa belajar praktek dengan speaking.</p>
                        </div>
                        <div>
                            <p className="w-full font-black">POINT 3</p>
                            <p>Sangat seru dan asik. Asik deh.</p>
                        </div>
                        <div>
                            <p className="w-full font-black">POINT 4</p>
                            <p>Gurunya chill bangetzzzzzz.</p>
                        </div>
                    </div>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default About;