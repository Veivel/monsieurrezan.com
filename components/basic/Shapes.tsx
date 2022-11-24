import tw, { styled } from "twin.macro";

const Ow = styled.div`
    ${tw`flex flex-row [width: 400px] [height: 100px] [background-repeat: repeat] [background-color: blue] opacity-100`}
`;

const Flex1 = styled.div`
    ${tw`flex flex-row [margin-right: auto]`}
`;

const Flex2 = styled.div`
    ${tw`flex flex-row justify-center [width: 300px] [height: 300px]`}
`;

const Flex3 = styled.div`
    ${tw`flex flex-row justify-center [width: 100px] [height: 100px]`}
`;

const Flex4 = styled.div`
    ${tw`flex flex-row justify-end [width: 400px] [height: 100px]`}
`;

const Circle = styled.div`
    ${tw`[border-radius: 100%] [background-color: white] [z-index: 1000] [width: 100px] [height: 100px]`}
`;

const Ristektestthingy = () => {
    return(
        <div>
            <Ow>
                <Flex1><Circle></Circle></Flex1>
                <Circle></Circle>
                <Circle></Circle>
            </Ow>
            <Ow></Ow>
            <Ow>
                <Flex2>
                    <Circle></Circle>
                    <Circle></Circle>
                </Flex2>
            </Ow>
            <Ow>
                <Flex4>
                    <Circle></Circle>
                    <Circle></Circle>
                </Flex4>
            </Ow>
        </div>
    );
}

export default Ristektestthingy;