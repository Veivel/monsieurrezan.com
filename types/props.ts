/** Slide Props for Carousel: 
 * react-responsive-carousel (w/ legend), and 
 * swiffy slider (w/ slideVisible) <-- the morer awesomer carousel package <3
 * */

export type SLIDE_PROPS_TYPE = {
    imgSrc: string, 
    alt: string, 
    legend?: string,
    slideVisible?: boolean
};

/** Package Props for Packages' Tall Cards */
export type PACKAGE_PROPS_TYPE = {
    imgSrc: string,
    title: string,
    description: string,
    // actionBtnQuery: string
}