import tw, { styled } from "twin.macro";
/** See /components/sections/ for how to use these styled tw components properly.*/

class Section {
    // 1
    static SectionWrapper = styled.div`
        background-color: ${props => props.color || "yellow"};
        ${tw`[min-height: 400px] md:[min-height: 600px] md:py-20 md:px-12`}    
    `;

    // 2
    static RowWrapper = styled.div`
        width: ${props => props.style?.width}
        ${tw`flex flex-col md:flex-row [align-items: center] justify-center my-4 md:my-6`}
    `;

    //3
    static ColWrapper = styled.div`
        width: ${props => props.style?.width}
        ${tw`flex flex-col [align-items: center] px-12 md:px-40 lg:px-52 xl:px-60 justify-center`}
    `; 

    // items of colwrapper

    static Title = styled.h1`
        font-family: 'Helvetica', sans-serif;
        ${tw`font-black [line-height: 4rem] text-4xl md:text-[4rem] text-black mb-2`}
    `;

    static Subtitle = styled.h3`
        ${tw`uppercase font-semibold text-sm md:text-base text-slate-700 mt-2`}
    `;

    static Body = styled.p`
        ${tw`font-light text-base md:text-lg text-gray-900 text-justify my-4`}
    `;

    static Grid = styled.div`

    `;


}

export default Section;