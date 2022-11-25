import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/sections/OldFeatured';
import Testimonials from '../components/sections/Testimonials';
import styled from 'styled-components';
import tw from 'twin.macro';
import Section from '../components/elements/Section';
import About from '../components/sections/About';
import References from '../components/sections/References';

const LandingContainer = styled.div` 
    ${tw`flex flex-col w-full h-full`}
`;


export default function Home() {
    return (
        <LandingContainer>
            <Head>
                <title>Belajar Perancis dengan Monsieur Rezan</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            <About />
            <References />
        </LandingContainer>
    );
}