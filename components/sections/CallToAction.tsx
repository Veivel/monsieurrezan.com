import Section from "../constants/Section";
import Image from "next/image";
import ActionButton from "../constants/buttons/ActionButton";
import useMediaQuery from "../utils/media/media";

const CallToAction = () : JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    
    return (
        <div className="flex flex-row w-screen h-[300px] justify-center">

            <div className="
                flex flex-col w-[70%] md:py-20 md:pl-48 lg:pl-60 
                justify-center"
            >
                <div className="border-l-4 border-black px-6">
                    <Section.Title>Daftar sekarang!</Section.Title>
                    <ActionButton className="md:w-[20%] mt-3 md:mt-6 md:mx-auto" onClick={e => window.location.replace("/daftar")}>
                        ENROLL
                    </ActionButton>
                </div>
                
            </div>
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