import Section from "../constants/Section";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import TallCard from "../constants/TallCard";
import { PACKAGE_PROPS_TYPE } from "../../types/props";
import { Element } from "react-scroll";

import { useEffect, useState } from "react";
import axios from "axios";

const PackageCards = styled.div`
    ${tw`
    flex flex-col md:grid md:place-items-center 
    md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 
    [width: 100%] 2xl:w-max justify-center`}
`;

const initialPackages:PACKAGE_PROPS_TYPE[] = [];

const Packages = () : JSX.Element => {
    const sectionName = "Paket";
    const [data, setData] = useState<any>();

    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[packageSection][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.packageSection)
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Section.SectionWrapper style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}>
            <Section.RowWrapper>
                <div className="text-center flex flex-col md:px-48">
                    <Section.Title>
                        <Element name={sectionName}>
                            Belajar dengan praktek!
                        </Element>
                    </Section.Title>
                    <Section.Body className="text-center mx-auto px-10 md:px-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Section.Body>
                    <PackageCards>
                        { data?.packages.map((item:any, idx:number) => (
                            <TallCard key={idx} {...item}/>
                        ))}
                    </PackageCards>
                </div>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default Packages;