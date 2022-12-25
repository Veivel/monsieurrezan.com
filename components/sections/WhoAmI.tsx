import axios from "axios";
import Section from "../constants/Section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import tw, { styled } from "twin.macro";
import ReactMarkdown from 'react-markdown';

const WhoAmI = () : JSX.Element => {
    const SectionName = "TentangSaya"
    const [data, setData] = useState<any>();

    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[TentangSaya][populate]=*`)
            .then(response => {
                // console.log(response.data.data.attributes.TentangSaya)
                setData(response.data.data.attributes.TentangSaya)
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <Section.SectionWrapper style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}>
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title style={{textAlign: "center"}}>
                        <Element name={SectionName}>
                            {data?.title}
                        </Element>
                    </Section.Title>
                    <Section.RowWrapper className="mx-4 md:mx-32 gap-x-8">
                        <Image 
                            className="shadow-md shadow-gray-600"
                            src={data?.picUrl}
                            width={600}
                            height={900}
                            alt="picture of Monsieur Rezan"
                        />
                        <div className="flex flex-col">
                            <ReactMarkdown>
                                {data?.body}
                            </ReactMarkdown>
                        </div>
                    </Section.RowWrapper>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default WhoAmI;