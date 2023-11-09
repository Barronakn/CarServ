import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import ServicesPage from '@/Components/ServicesPage';
import Top from '@/Components/Top';
import React from 'react';

const Services = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Services" sectionLink="Services" />
            <ServicesPage />
            <Footer />
            <Top />
        </div>
    );
};

export default Services;
