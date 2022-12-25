import Head from 'next/head'
import styled from 'styled-components';
import Section from '../../components/constants/Section';
import tw from 'twin.macro';
import RegForm from '../../components/sections/RegForm';
import { AxiosProvider } from '../../components/utils/context/AxiosProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LandingContainer = styled.div` 
    ${tw`flex flex-col w-full h-full overflow-hidden`}
`;

export default function Home() {
    const [data, setData] = useState<any>();

    const fetchGlobal = (): void => {
        axios
            .get(`/api/global?populate=*`)
            .then(response => {
                console.log(response.data.data.attributes);
                setData(response.data.data.attributes)
            })
            .catch(error => {
                console.log("Global fetch error: ", error.response.data.error);
            });
    }

    useEffect(() => {
        fetchGlobal();
    }, []);

    return (
        <LandingContainer>
            <Head>
                <title>Form Registrasi</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AxiosProvider>
                <Section.SectionWrapper 
                    style={{'backgroundImage': `url("${data?.generalBackground.url}")`}}
                >
                    <Section.RowWrapper style={{marginTop: "64px"}}>
                        {/* <Section.ColWrapper> */}
                            <RegForm />
                        {/* </Section.ColWrapper> */}
                    </Section.RowWrapper>
                </Section.SectionWrapper>
            </AxiosProvider>
        </LandingContainer>
    );
}