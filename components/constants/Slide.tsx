import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import { SLIDE_PROPS_TYPE } from "../../types/props";
import { LabelContainer, Label, LabelTitle, LabelContent } from "./Label";

const SlideContainer = styled.div`
    max-height: 640px;
    overflow: hidden;
    ${tw`relative`}`
;

const Slide = ({imgSrc, alt, legend}:SLIDE_PROPS_TYPE) => {
    return(
        <SlideContainer>
            <Image // this works, even tho react-responsive-carousel supposedly doesnt recognize next/images.
                src={imgSrc} 
                alt={alt} // alt-text
                width={640} 
                height={640} 
                style={{
                    objectFit: "cover", // prevents stretching (preserve aspect-ratio)
                    zIndex: -1
                }}
            />
        </SlideContainer>
    );
}

export default Slide;