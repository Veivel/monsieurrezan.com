import Section from "../constants/Section";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import TallCard from "../constants/TallCard";
import { PackageProps } from "../../types/props";
import { Element } from "react-scroll";
import { useGlobalStore } from "../utils/state/store";
import { useEffect } from "react";

const PackageCards = styled.div`
    ${tw`flex flex-col md:flex-row [width: 100%] justify-center`}
`;


const Packages = () : JSX.Element => {
    const sectionName = "Paket";
    const setCurrentSection = useGlobalStore(state => state.setActiveSection);

    const packages:PackageProps[] = [
        {imgSrc:"https://placekitten.com/g/400/250", title:"Paket A", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/400/248", title:"Paket B", description:"LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/400/251", title:"Paket C", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/g/401/250", title:"Paket D", description:"LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://placekitten.com/401/252", title:"Paket E", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
        {imgSrc:"https://via.placeholder.com/400x250.png", title:"Paket F", description:"LOREM IPSUM dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
    ];

    return (
        <Section.SectionWrapper color="#66ccff">
            <Section.RowWrapper>
                <Section.ColWrapper style={{textAlign: "center"}}>
                    <Section.Title>
                        <Element name={sectionName}>
                            Belajar dengan praktek!
                        </Element>
                    </Section.Title>
                    <Section.Body style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default Packages;