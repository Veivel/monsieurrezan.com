/** Slide Props for Carousel: 
 * react-responsive-carousel (w/ legend), and 
 * swiffy slider (w/ slideVisible) <-- the morer awesomer carousel package <3
 * */

export type CAPTIONED_SLIDE_PROPS_TYPE = {
    url: string, 
    alt: string, 
    captionText: string,
    captionTitle?: string,
    legend?: string,
    slideVisible?: boolean
};

export type REVIEW_SLIDE_PROPS_TYPE = {
    reviewerName: string,
    reviewerPictureUrl: string,
    reviewerInfo: string,
    text: string,
}

export type SLIDE_PROPS_TYPE = {
    url: string, 
    alt: string, 
};

/** Package Props for Packages' Tall Cards */
export type PACKAGE_PROPS_TYPE = {
    imgUrl: string,
    name: string,
    description: string,
    // actionBtnQuery: string
}