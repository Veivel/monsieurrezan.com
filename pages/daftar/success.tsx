import Head from 'next/head'
import styled from 'styled-components';
import Section from '../../components/constants/Section';
import tw from 'twin.macro';
import Image from 'next/image';
import { CardContainer, CardContentWrapper } from '../../components/constants/PageCard';
import ActionButton from '../../components/constants/buttons/ActionButton';

const LandingContainer = styled.div` 
    ${tw`flex flex-col w-full h-full overflow-hidden`}
`;

export default function Success() {
    return (
        <LandingContainer>
            <Head>
                <title>Berhasil Registrasi!</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section.SectionWrapper color='white'>
                <Section.RowWrapper style={{marginTop: "64px"}}>
                    <CardContainer style={{'backgroundColor': 'whitesmoke'}} className='flex flex-row justify-center px-4'>
                        <CardContentWrapper className='flex flex-col justify-center text-center'>
                            <div className='relative w-[125px] md:w-[250px] h-[125px] md:h-[250px] mx-auto'>
                                <Image 
                                    src="/icons/betis-checkmark.png"
                                    alt="checkmark"
                                    fill
                                />
                            </div>
                            <div className='my-5'>
                                <h1 className='text-xl md:text-2xl font-bold'>Terima kasih sudah mendaftar!</h1>
                                <p className='text-sm md:text-base'>Silahkan memerika inbox e-mail anda.</p>
                            </div>
                            <ActionButton onClick={e => window.location.replace("/")} className="mx-8 md:mx-2">Kembali</ActionButton>
                        </CardContentWrapper>
                    </CardContainer>    
                </Section.RowWrapper>
            </Section.SectionWrapper>
        </LandingContainer>
    );
}