import Section from "../constants/Section";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import TallCard from "../constants/TallCard";
import { PACKAGE_PROPS_TYPE } from "../../types/props";
import { Element } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";
import { useEffect } from "react";

const PackageCards = styled.div`
    ${tw`flex flex-col md:flex-row [width: 100%] justify-center`}
`;


const Packages = () : JSX.Element => {
    const sectionName = "Paket";
    const setCurrentSection = useGlobalStore(state => state.setActiveSection);

    const packages:PACKAGE_PROPS_TYPE[] = [
        {imgSrc:"https://placekitten.com/g/400/300", title:"Paket A", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/400/308", title:"Paket B", description:"LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/400/301", title:"Paket C", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/401/300", title:"Paket D", description:"LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/401/303", title:"Paket E", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://via.placeholder.com/400x300.png", title:"Paket F", description:"LOREM IPSUM dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
    ];

    return (
        <Section.SectionWrapper color="#66ccff">
            <Section.RowWrapper>
                <div className="text-center flex flex-col px-48">
                    <Section.Title>
                        <Element name={sectionName}>
                            Belajar dengan praktek!
                        </Element>
                    </Section.Title>
                    <Section.Body className="text-center mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Section.Body>
                    <PackageCards>
                        <TallCard {...packages[0]} />
                        <TallCard {...packages[1]}/>
                        <TallCard {...packages[2]}/>
                    </PackageCards>
                    <PackageCards>
                        {/* <TallCard {...packages[3]}/> */}
                        <TallCard {...packages[4]}/>
                        <TallCard {...packages[5]}/>
                    </PackageCards>
                </div>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default Packages;