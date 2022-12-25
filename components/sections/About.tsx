import { useEffect, useState } from "react";
import Section from "../constants/Section";
import axios from "axios";

const About = () : JSX.Element => {
    const [data, setData] = useState<any>();

    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[MauBljrPerancis][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.MauBljrPerancis);
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Section.SectionWrapper 
            className="h-[660px] md:h-[600px] mt-[150%] md:mt-0" 
            style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}
        >
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title className="w-[110%]">Mau belajar bahasa perancis?</Section.Title>
                    <Section.Subtitle>{data?.subtitle}</Section.Subtitle>
                    <br />
                    <Section.Body>{data?.body}</Section.Body>
                    <br/>
                    <div className="grid grid-cols-2 md:flex md:flex-row justify-around gap-4 md:gap-x-8 text-center font-light text-sm md:text-lg">
                        {data?.points.map((item:any, idx:number) => (
                            <div key={idx} className={`w-[${100/data?.points.length}%]`}>
                                <p className="w-full font-black">{item.leading}</p>
                                <p>{item.subtext}</p>
                            </div>
                        ))}
                    </div>
                </Section.ColWrapper>
            </Section.RowWrapper>
        </Section.SectionWrapper>
    );
}

export default About;