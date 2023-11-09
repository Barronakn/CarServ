import AboutPage from '@/Components/AboutPage';
import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import Top from '@/Components/Top';
import React from 'react';

const About = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="About Us" sectionLink="About" />
            <AboutPage />
            <Footer />
            <Top />
        </div>
    );
};

export default About;
