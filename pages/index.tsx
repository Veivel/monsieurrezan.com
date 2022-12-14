import Head from 'next/head'
import Hero from '../components/sections/Hero';
import styled from 'styled-components';
import tw from 'twin.macro';
import Section from '../components/constants/Section';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Packages from '../components/sections/Packages';
import References from '../components/sections/References';
import { Suspense } from 'react';
import WhoAmI from '../components/sections/WhoAmI';
import Socials from '../components/sections/Socials';
import CallToAction from '../components/sections/CallToAction';
import Documentation from '../components/sections/Documentation';

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
            </Head>

            <Hero />
            <Suspense fallback="loading">
                <About />
            </Suspense>
            <Suspense fallback="loading">
                <References />
            </Suspense>
            <Suspense fallback="loading">
                <Testimonials />
            </Suspense>
            <Suspense fallback="loading">
                <Packages />
            </Suspense>
            <Suspense fallback="loading">
                <WhoAmI />
            </Suspense>
            <Suspense fallback="loading">
                <Socials />
            </Suspense>
            <Suspense fallback="loading">
                <Documentation />
            </Suspense>
            <Suspense fallback="loading">
                <CallToAction />
            </Suspense>

        </LandingContainer>
    );
}