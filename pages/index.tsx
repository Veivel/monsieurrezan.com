import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/sections/Featured';
import styled from 'styled-components';
import tw from 'twin.macro';
import Section from '../components/elements/Section';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Packages from '../components/sections/Packages';
import References from '../components/sections/References';
import { Suspense } from 'react';
import WhoAmI from '../components/sections/WhoAmI';

const LandingContainer = styled.div` 
    ${tw`flex flex-col w-full h-full overflow-hidden`}
`;

/** TODO implement SSG/ISR
 * read: https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation
 */
export default function Home() {
    return (
        <LandingContainer>
            <Head>
                <title>Belajar Perancis dengan Monsieur Rezan</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" defer />
                <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet"></link>
            </Head>

            <Suspense>
                <Featured />
            </Suspense>
            <Suspense>
                <About />
            </Suspense>
            <Suspense>
                <References />
            </Suspense>
            <Suspense>
                <Testimonials />
            </Suspense>
            <Suspense>
                <Packages />
            </Suspense>
            <Suspense>
                <WhoAmI />
            </Suspense>

        </LandingContainer>
    );
}