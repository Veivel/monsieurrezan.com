import Head from "next/head";
import Link from "next/link";
import FancyButton from "../components/constants/buttons/FancyButton";
import Section from "../components/constants/Section";

const Custom404 = () : JSX.Element => {
    return(
        <div>
            <Head>
                <title>Oops...</title>
                <meta name="description" content="Website dari guru bahasa perancis Monsieur Rezan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Section.SectionWrapper className="dual-bg">
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