import Section from "../constants/Section";
import Image from "next/image";
import ActionButton from "../constants/buttons/ActionButton";
import useMediaQuery from "../utils/media/media";
import { useEffect, useState } from "react";
import axios from "axios";

const CallToAction = () : JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const [data, setData] = useState<any>();
    
    const fetchData = (): void => {
        axios
            .get(`/api/landing?populate[galeriDokumentasi][populate]=*`)
            .then(response => {
                setData(response.data.data.attributes.galeriDokumentasi)
            })
            .catch(error => {
                console.log("ERROR: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);    

    return (
        <div 
            className="flex flex-row w-screen h-[600px] justify-center"
            style={{'backgroundImage': `url("${data?.bg.url}")`, 'color': `${data?.textColor}`}}
        >
            <Section.SectionWrapper 
                className="flex flex-col md:py-20 justify-center"
            >
                <div className="border-l-4 border-black px-6">
                    <Section.Title>Daftar sekarang!</Section.Title>
                    <ActionButton 
                        className="w-[50%] md:w-[70%] mt-3 md:mt-6 md:mx-auto text-3xl" 
                        onClick={e => window.location.replace("/daftar")}
                    >
                        ENROLL
                    </ActionButton>
                </div>
                
            </Section.SectionWrapper>
            { false ?
            <div className="relative w-[60%] h-[600px] ml-auto">
                <Image 
                    src="https://placekitten.com/800/600"
                    alt="TODO"
                    fill
                />
            </div> : <></>}
        </div>
    );
}

export default CallToAction;