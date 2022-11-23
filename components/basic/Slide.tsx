import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import { slide } from "../../types/custom";

const SlideContainer = styled.div`
    max-height: 640px;
    overflow: hidden;
    ${tw``}`
;

const Slide = ({imgSrc, alt, legend}:slide) => {
    return(
        <SlideContainer>
            <Image src={imgSrc} alt={alt} width={1920} height={640} style={{overflow: 'hidden'}}/>
            <p>{legend}</p>
        </SlideContainer>
    );
}

export default Slide;