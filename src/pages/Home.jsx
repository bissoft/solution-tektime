import React from 'react';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud'; // Keeping import just in case, or can remove
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import Security from '../components/Security';

export default function Home() {
    return (
        <>
            <Hero />
            {/* <Reveal><LogoCloud /></Reveal> */}
            <Reveal><HowItWorks /></Reveal>
            <Reveal><Features /></Reveal>
            <Reveal><Testimonials /></Reveal>
            <Reveal><Integrations /></Reveal>
            <Reveal><Security /></Reveal>
            <Reveal><Pricing /></Reveal>
            <Reveal><FAQ /></Reveal>
            <Reveal><CTA /></Reveal>
        </>
    );
}
