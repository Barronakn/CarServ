import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import TechniciansPage from '@/Components/TechniciansPage';
import Top from '@/Components/Top';
import React from 'react';

const Technicians = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Technicians" sectionLink="Technicians" />
            <TechniciansPage />
            <Footer />
            <Top />
        </div>
    );
};

export default Technicians;
