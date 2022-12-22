import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Section from "../constants/Section";
import { useEffect, useState } from "react";
import Image from "next/image";
import ScalingLink, { UnsizedScalingLink } from "../constants/ScalingLink";
import SOCIAL_LINKS from "../constants/data/socials";

const InstaFeature = ({url}: {url:string}) : JSX.Element => {
    return(
        <>
            <div className="flex justify-center">
                <InstagramEmbed
                    url={url}
                    width={328}
                />
            </div>
        </>
    );
}

const YoutubeFeature = ({url}: {url:string}) : JSX.Element => {
    return(
        <div className="">
            <YouTubeEmbed
                height={612}
                url={url}
                width={328}
            />
        </div>
    );
}

const Socials = () : JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <Section.SectionWrapper className="h-[1800px] md:h-[1200px] bg-1-dark-blue text-white">
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title className="px-8 text-center md:px-0">Dapatkan sedikit preview...</Section.Title>
                    <div className="flex flex-col md:flex-row justify-center gap-x-5 text-justify mt-12 mb-24 px-2 md:px-0 max-w-[100%]">
                            {isLoading ? "Loading..." : <InstaFeature url="https://www.instagram.com/p/CkdK5D4AGF-/"/>}
                            {isLoading ? "Loading..." : <YoutubeFeature url="https://youtu.be/7VSR4_tAYvw"/>}
                    </div>
                    <div className="shadow-2xl shadow-2-light-blue rounded-3xl px-1 py-6 mx-10">
                        <h2 className="text-center pb-4 font-extralight text-xl">
                            ...dan langsung hubungi kami!
                        </h2>
                        <div className="
                            grid grid-cols-2 place-content-center
                            md:flex md:flex-row md:justify-center
                            gap-4 md:gap-x-6 mx-[25%]
                        ">
                            <UnsizedScalingLink href={SOCIAL_LINKS['tiktok']} target="_blank">
                                <Image
                                    src="/icons/social/white-tiktok.png"
                                    width={80}
                                    height={80}
                                    alt="tiktok"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['instagram']} target="_blank">
                                <Image
                                    src="/icons/social/white-instagram.png"
                                    width={80}
                                    height={80}
                                    alt="instagram"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['whatsapp']} target="_blank">
                                <Image
                                    src="/icons/social/white-whatsapp.png"
                                    width={80}
                                    height={80}
                                    alt="whatsapp"
                                />
                            </UnsizedScalingLink>
                            <UnsizedScalingLink href={SOCIAL_LINKS['youtube']} target="_blank">
                                <Image
                                    src="/icons/social/white-youtube.png"
                                    width={80}
                                    height={80}
                                    alt="youtube"
                                />
                            </UnsizedScalingLink>
                        </div>
                    </div>
                </Section.ColWrapper>
            </Section.RowWrapper>
            {/* <a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </Section.SectionWrapper>
    );
}

export default Socials;