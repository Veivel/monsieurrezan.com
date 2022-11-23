import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/sections/Featured';
import Testimonials from '../components/sections/Testimonials';
import PageNavbar from '../components/layout/Navbar';
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import tw from 'twin.macro';

const LandingContainer = styled.div`${tw`flex w-full h-full`}`;


export default function Home() {
    return (
        <LandingContainer>
            <Featured />
        </LandingContainer>
    );
}