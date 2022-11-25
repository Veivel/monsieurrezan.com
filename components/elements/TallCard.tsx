import tw, { styled } from "twin.macro";
import Image from "next/image";
import { PackageProps } from "../../types/props";

const TallCard = (props: PackageProps) : JSX.Element => { 
    const [width, height] = [400, 250];
    const n = 4;

    const CardHeader = styled.h1`
        ${tw`font-extrabold text-2xl md:text-4xl`}
    `;

    const CardContainer = styled.div`
        ${tw`
            m-5 
            [max-width: 400px]
            [border-radius: 5%] 
            [height: 550px] md:[height: 600px] 
            [background-color:#fafafa] 
            shadow-xl text-black md:text-gray-800`
        }
        @media only screen and (min-width: ${768}px) {
            width: ${100/(n)}%;
        }
        transition: transform 0.15s;
        &:hover {
            background-color: white;
            transform: scale(1.03);
            drop-shadow;
            color: black;
        }
    `;

    const CardContentWrapper = styled.div`
        ${tw`px-10 py-3`}
    `;

    const CardImageWrapper = styled.div`
        ${tw`overflow-clip [border-top-right-radius: 5%] [border-top-left-radius: 5%]`}
    `;

    const CardBody = styled.p`
        ${tw`font-light text-base md:text-base text-justify mt-5`}
    `;

    return (
        <CardContainer>
            <CardImageWrapper>
                <Image 
                    src={props.imgSrc}
                    width={width}
                    height={height}
                    alt="wow"
                />
            </CardImageWrapper>
            <CardContentWrapper>
                <CardHeader>
                    {props.title}
                </CardHeader>
                <CardBody>
                    {props.description}
                </CardBody>
            </CardContentWrapper>
        </CardContainer>
    );
}
export default TallCard;