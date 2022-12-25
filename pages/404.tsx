import Head from "next/head";
import Link from "next/link";
import FancyButton from "../components/constants/buttons/FancyButton";
import Section from "../components/constants/Section";
import axios from "axios";
import { useState, useEffect } from "react";

const Custom404 = () : JSX.Element => {
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

    return(
        <div>
            <Head>
                <title>Oops...</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Section.SectionWrapper 
                style={{'backgroundImage': `url("${data?.generalBackground.url}")`}}
            >
                <div style={{height: "100px"}}></div>
                <Section.RowWrapper>
                    <Section.ColWrapper style={{textAlign: "center", backgroundColor: "white"}} className="py-10 rounded-2xl">
                        <Section.Title>OOPS...</Section.Title>
                        <h3 className="mb-8 text-xl"><b>Halaman tidak ditemukan.</b></h3>
                        <Link href="/">
                            <FancyButton style={{marginRight: "auto"}}>Kembali</FancyButton>
                        </Link>
                    </Section.ColWrapper>
                </Section.RowWrapper>
            </Section.SectionWrapper>
        </div>
    );
}

export default Custom404;