import Section from "../constants/Section";
import Image from "next/image";
import ActionButton from "../constants/buttons/ActionButton";

const CallToAction = () : JSX.Element => {
    return (
        <div className="flex flex-row w-screen h-[600px]">
            <div className="flex flex-col md:py-20 md:pl-52 lg:pl-64 xl:pl-72 justify-center">
                <Section.Title>Daftar sekarang!</Section.Title>
                <ActionButton className="mr-[50%] mt-8" onClick={e => window.location.replace("/daftar")}>
                    ENROLL
                </ActionButton>
            </div>
            <div className="relative w-[50%] h-[600px] ml-auto">
                <Image 
                    src="https://placekitten.com/800/600"
                    alt="TODO"
                    fill
                />
            </div>
        </div>
    );
}

export default CallToAction;