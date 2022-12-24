import tw, { styled } from "twin.macro";

export const FormWrapper = styled.form`
    ${tw`grid grid-cols-2 place-content-center`}
`;

export const StyledInput = styled.input`
    width: ${props => props.width || "100%"};
    ${tw`mb-2 [height: 40px] rounded-full px-2 border border-gray-400`}
`;

export const StyledSelect = styled.select`
    ${tw`mb-2 [height: 40px] [width: 100%] rounded-full px-2
    border border-gray-400`}
`;

export const FormItem = styled.div<{span: number}>`
    grid-column: span ${props => props.span} / span ${props => props.span};
    ${tw`flex-row mx-10 md:mx-16 mb-3`}
`;