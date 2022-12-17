import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Section from "../constants/Section";
import { useEffect, useState } from "react";
import Image from "next/image";
import ScalingLink from "../constants/ScalingLink";

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
                height={600}
                url={url}
                width={400}
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
        <Section.SectionWrapper color="white" style={{height: "1200px"}}>
            <Section.RowWrapper>
                <Section.ColWrapper>
                    <Section.Title>Dapatkan sedikit preview...</Section.Title>
                    <div className="flex flex-row justify-center gap-x-5 text-justify mt-12 mb-24">
                            {isLoading ? "Loading..." : <InstaFeature url="https://www.instagram.com/p/CkdK5D4AGF-/"/>}
                            {isLoading ? "Loading..." : <YoutubeFeature url="https://youtu.be/7VSR4_tAYvw"/>}
                    </div>
                    <Section.Subtitle className="text-center bg-white rounded-t-xl pt-4">
                        ...dan langsung hubungi kami!
                    </Section.Subtitle>
                    <div className="flex flex-row justify-center pt-3 gap-x-6 bg-white rounded-b-xl pb-4">
                        <ScalingLink href="https://www.w3schools.com/" target="_blank">
                            <Image
                                src="/icons/social/tiktok.png"
                                width={80}
                                height={80}
                                alt="tiktok"
                            />
                        </ScalingLink>
                        <ScalingLink href="https://www.instagram.com/monsieurrezan/" target="_blank">
                            <Image
                                src="/icons/social/instagram.png"
                                width={80}
                                height={80}
                                alt="instagram"
                            />
                        </ScalingLink>
                        <ScalingLink href="https://wa.me/+6283137447153" target="_blank">
                            <Image
                                src="/icons/social/whatsapp.png"
                                width={80}
                                height={80}
                                alt="whatsapp"
                            />
                        </ScalingLink>
                        <ScalingLink href="https://www.w3schools.com/" target="_blank">
                            <Image
                                src="/icons/social/youtube.png"
                                width={80}
                                height={80}
                                alt="youtube"
                            />
                        </ScalingLink>
                    </div>
                </Section.ColWrapper>
            </Section.RowWrapper>
            {/* <a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </Section.SectionWrapper>
    );
}

export default Socials;