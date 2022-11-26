import Head from 'next/head'
import styled from 'styled-components';
import Section from '../../components/elements/Section';
import tw from 'twin.macro';

const LandingContainer = styled.div` 
    ${tw`flex flex-col w-full h-full overflow-hidden`}
`;

export default function Home() {
    return (
        <LandingContainer>
            <Head>
                <title>Form Registrasi</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section.SectionWrapper color='white'>
                <Section.RowWrapper>
                    <Section.ColWrapper>
                        <p>halo</p>
                        <p>page ini belum ada ya</p>
                    </Section.ColWrapper>
                </Section.RowWrapper>
            </Section.SectionWrapper>
        </LandingContainer>
    );
}