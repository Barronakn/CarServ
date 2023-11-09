import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import PageContact from '@/Components/PageContact';
import Top from '@/Components/Top';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Contact" sectionLink="Contact" />
            <PageContact />
            <Footer />
            <Top />
        </div>
    );
};

export default Contact;
