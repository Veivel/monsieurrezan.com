import tw, { styled } from "twin.macro";
import Image from "next/image";
import { PACKAGE_PROPS_TYPE } from "../../types/props";
import Link from "next/link";
import ActionButton from "./buttons/ActionButton";

const CardHeader = styled.h1`
    ${tw`font-extrabold text-2xl md:text-4xl`}
`;

const n = 4;
const CardContainer = styled.div`
    ${tw`
        mx-auto my-5 md:m-5
        w-[300px]
        [border-radius: 5%] 
        [height: 550px] md:[height: 600px] 
        [background-color:#fafafa] 
        shadow-gray-700 shadow-lg text-black md:text-gray-800`
    }
    @media only screen and (min-width: ${768}px) {
        width: 300px;
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
    ${tw`px-10 py-3 h-[45%]`}
`;

const CardImageWrapper = styled.div`
    ${tw`overflow-clip w-fit h-[260px] [border-top-right-radius: 5%] [border-top-left-radius: 5%]`}
`;

const CardBody = styled.p`
    ${tw`font-light text-base md:text-base text-justify mt-5`}
`;

const TallCard = (props: PACKAGE_PROPS_TYPE) : JSX.Element => { 
    const [width, height] = [300, 260];

    return (
        <CardContainer>
            <CardImageWrapper>
                <Image 
                    src={props.imgUrl}
                    width={width}
                    height={height}
                    alt="wow"
                />
            </CardImageWrapper>
            <CardContentWrapper>
                <CardHeader>
                    {props.name}
                </CardHeader>
                <CardBody>
                    {props.description}
                </CardBody>
            </CardContentWrapper>
            <div>
                <Link href="/daftar">
                    <ActionButton>Daftar</ActionButton>
                </Link>
            </div>
        </CardContainer>
    );
}
export default TallCard;