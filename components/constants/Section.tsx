import tw, { styled } from "twin.macro";
/** See /components/sections/ for how to use these styled tw components properly.*/

class Section {
    // 1
    static SectionWrapper = styled.div`
        background-color: ${props => props.color || "yellow"};
        ${tw`[min-height: 400px] md:[min-height: 400px] md:p-10`}    
    `;

    // 2
    static RowWrapper = styled.div`
        width: ${props => props.style?.width}
        ${tw`flex flex-col md:flex-row [align-items: center] justify-center m-2 md:m-5`}
    `;

    //3
    static ColWrapper = styled.div`
        width: ${props => props.style?.width}
        ${tw`flex flex-col [align-items: center] px-12 md:px-32 justify-center`}
    `; 

    // items of colwrapper

    static Title = styled.h1`
        ${tw`font-extrabold text-4xl md:text-6xl text-black mb-2`}
    `;

    static Subtitle = styled.h3`
        ${tw`font-light text-base md:text-lg text-slate-900 mt-0`}
    `;

    static Body = styled.p`
        ${tw`font-light text-base md:text-lg text-gray-900 text-justify mt-8`}
    `;

    static Grid = styled.div`

    `;


}

export default Section;