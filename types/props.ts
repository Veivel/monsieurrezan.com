/** Slide Props for Carousel: 
 * react-responsive-carousel (w/ legend), and 
 * swiffy slider (w/ slideVisible) <-- the morer awesomer carousel package <3
 * */

export type CAPTIONED_SLIDE_PROPS_TYPE = {
    imgSrc: string, 
    alt: string, 
    captionText: string,
    captionTitle?: string,
    legend?: string,
    slideVisible?: boolean
};

export type REVIEW_SLIDE_PROPS_TYPE = {
    reviewerName: string,
    reviewerPicSrc: string,
    reviewerInfo: string,
    text: string,
}

export type SLIDE_PROPS_TYPE = {
    imgSrc: string, 
    alt: string, 
};

/** Package Props for Packages' Tall Cards */
export type PACKAGE_PROPS_TYPE = {
    imgSrc: string,
    title: string,
    description: string,
    // actionBtnQuery: string
}