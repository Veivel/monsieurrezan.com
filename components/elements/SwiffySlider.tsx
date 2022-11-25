export default class SwiffySlider {
    static LongerSwiffySlider = "swiffy-slider slider-item-show5 slider-item-show3-sm slider-item-ratio slider-item-ratio-1x1 slider-nav-chevron slider-nav-dark slider-nav-outside slider-nav-visible slider-nav-autoplay slider-nav-autopause";
    static SwiffySlider = "swiffy-slider slider-item-show2 slider-item-nogap slider-item-show1-sm slider-nav-square slider-nav-visible slider-nav-sm slider-nav-dark slider-nav-autopause slider-nav-autoplay";
    static Container = "slider-container";
    static Nav = (): JSX.Element => {
        return(
            <div>
                <button type="button" className="slider-nav"></button>
                <button type="button" className="slider-nav slider-nav-next"></button>
            </div>
        );
    }
}